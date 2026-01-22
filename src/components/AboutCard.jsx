const ServiceCard = ({ icon, title, details }) => {
    return (
      <>
        <div className="w-96 ">
          <div className="mb-8 rounded-[20px] p-10 md:px-7 xl:px-10 flex flex-col content-center items-center">
            <div
              className="m-1 flex h-[100px] w-[100px] p-3 items-center justify-center rounded-2xl text-black"
            >
              {icon}
            </div>
            <h4 className="mb-3 text-xl font-semibold text-white">{title}</h4>
            <p className="text-body-color text-center text-lg text-white">{details}</p>
          </div>
        </div>
      </>
    );
  };

export default ServiceCard