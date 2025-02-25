import { NavLink, useLoaderData } from "react-router";
import Banner from "../banner/Banner";
import ServiceCard from "../serviceCard/ServiceCard";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {services.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <NavLink to="/all-treatment" className="btn btn-secondary">
          Show more
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
