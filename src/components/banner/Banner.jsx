const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-150px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://static01.nyt.com/images/2024/04/23/well/12WELL-ADVOCATE-DENTIST/12WELL-ADVOCATE-DENTIST-videoSixteenByNineJumbo1600.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className=" text-center lg:text-start">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
