import { useLoaderData } from "react-router";
import ServiceCard from "../serviceCard/ServiceCard";

const AllTreatment = () => {
  const services = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllTreatment;
