const ServiceCard = ({ service }) => {
  // console.log(service);
  const { id, treatment, image, description, cost } = service;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="h-60 w-auto rounded-2xl">
        <img
          className="object-cover h-full w-full rounded-2xl"
          src={image}
          alt="treatment"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <div className="badge badge-secondary">${cost}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="btn badge-outline btn-primary text-white">
            Checkout More
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
