import { createBrowserRouter } from "react-router";
import MainLayout from "../components/mainLayouts/MainLayout";
import Home from "../components/home/Home";
import AllTreatment from "../components/allTreatments/AllTreatment";
import MyAppointment from "./../components/myAppointment/MyAppointment";
import Profile from "../components/profile/Profile";
import Details from "../components/details/Details";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import PrivateRoutes from "../components/privateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json(); // Add 'await' here

          const feedbackRes = await fetch("/happyclients.json");
          const feedBackData = await feedbackRes.json(); // Add 'await' here

          return { servicesData, feedBackData };
        },
      },
      {
        path: "/all-treatment",
        element: <AllTreatment></AllTreatment>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/my-appointment",
        element: (
          <PrivateRoutes>
            <MyAppointment></MyAppointment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
