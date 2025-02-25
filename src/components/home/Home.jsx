import { NavLink, useLoaderData } from "react-router";
import Banner from "../banner/Banner";
import ServiceCard from "../serviceCard/ServiceCard";
import Feedback from "../feedback/Feedback";

const Home = () => {
  const { servicesData, feedBackData } = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {servicesData.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <NavLink to="/all-treatment" className="btn btn-secondary">
          Show more
        </NavLink>
      </div>
      <div className="py-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Customer Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {feedBackData.map((feedback) => (
            <Feedback key={feedback.id} feedback={feedback}></Feedback>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
