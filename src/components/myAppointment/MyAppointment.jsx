import { useContext, useEffect, useState } from "react";
import { authContext } from "../authProvider/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(authContext);
  const [localSavedData, setLocalSavedData] = useState([]);
  useEffect(() => {
    const localData = localStorage.getItem("appointments");
    let saveData = [];
    if (localData) {
      saveData = JSON.parse(localData);
    }
    const userData = saveData.filter((data) => data.email === user?.email);
    setLocalSavedData(userData);
  }, [user?.email]);

  return <div>My Appointment</div>;
};

export default MyAppointment;
