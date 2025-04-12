const ServiceCard = ({ icon, title, details }) => {
    return (
      <>
        <div className="w-96 ">
          <div className="mb-8 rounded-[20px] bg-white p-10 md:px-7 xl:px-10 flex flex-col content-center items-center">
            <div
              className="m-1 flex h-[70px] w-[70px] p-3 items-center justify-center rounded-2xl text-black"
            >
              {icon}
            </div>
            <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
            <p className="text-body-color text-center">{details}</p>
          </div>
        </div>
      </>
    );
  };

export default ServiceCard