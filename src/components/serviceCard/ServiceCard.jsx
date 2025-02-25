import { NavLink } from "react-router";

const ServiceCard = ({ service }) => {
  // console.log(service);
  const { id, treatment, image, description, cost } = service;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="h-48 w-auto rounded-2xl">
        <img
          className="object-cover h-full w-full rounded-2xl"
          src={image}
          alt="treatment"
        />
      </figure>
      <div className="p-4">
        <h2 className="card-title">
          {treatment}
          <div className="badge badge-secondary">${cost}</div>
        </h2>
        <p className="text-gray-500">{description}</p>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}>
            {" "}
            <div className="btn badge-outline btn-primary text-white">
              Checkout More
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
