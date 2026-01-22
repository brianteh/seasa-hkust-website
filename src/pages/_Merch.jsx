
import merch_pic from '/src/assets/merch/varsity_jacket.svg'
import merch_pic2 from '/src/assets/merch/varsity_jacket2.svg'
const Merch3 = () => {
  return (
    <>
    <div className="relative py-6">
    <div className="bg-[#4D2A17] min-w-screen min-h-screen lg:w-[100vw] w-[100vw] left-0 top-28">
      {/**On desktop view, text behind pic */}
      <p className="text-[#FFF] lg:text-[230px] text-[80px] font-extrabold leading-[293px] w-auto h-auto absolute lg:left-[470px] lg:top-[80px] top-[80px] lg:text-right text-center lg:block hidden md:hidden">
        VARSITY 
        JACKET
      </p>
      <img
        src={merch_pic}
        className="lg:w-[85vh] lg:h-[85vh] md:w-[70vh] md:justify-center w-[50vh] h-[50vh] relative lg:left-[30px] left-[15px] lg:top-[100px] top-[200px] md:top-[30vh] overflow-hidden max-w-none"
        alt="Merch"
      />
      {/**On mobile view, text in front of pic */}
      <p className="text-[#FFF] text-[80px] font-extrabold leading-[293px] w-auto h-auto absolute top-[80px] text-center lg:hidden block md:hidden">
        VARSITY 
        JACKET
      </p>
      {/**On tablet view, text in front of pic */}
      <p className="md:text-[#FFF] md:w-[70vh] md:top-[1vh] md:text-[130px] md:justify-center md:font-extrabold absolute md:left-[2vw] md:text-center lg:hidden hidden md:block">
        VARSITY 
        JACKET
      </p>
      <button className="md:left-[33.333vw] cursor-pointer text-nowrap flex py-px px-[17px] justify-center items-center gap-2.5 rounded-[9px] bg-[#FFD93A] shadow-[2px2px4px0rgba(0,0,0,0.25)] w-[248px] h-[52px] absolute lg:left-[1200px] lg:top-[640px] top-[600px] left-[60px]">
        <p className="text-[#4D2A17] text-2xl font-bold leading-6 w-fit">
          Order Now
        </p>
      </button>
      <p className="md:left-[25vw] md:top-[50vh] md:text-[20px] text-[#FFD93A] lg:text-[20px] text-[15px] leading-[28.8px] lg:w-[553px] lg:h-[29px] absolute lg:left-[550px] lg:top-[650px] top-[570px] left-[30px] md:top-[30vh] lg:text-right text-center">
        Our official merchandise is now on sale.
      </p>
    </div>
    </div>


    <div className="min-w-screen min-h-screen relative left-0 top-[-5vh]">
        <img
        src={merch_pic2}
        className="lg:w-[70vw] lg:h-[100vh] absolute"
        alt="Merch 1"
        />
        <div className="bg-[#DECEC0] lg:w-[29.5vw] lg:h-[99.5vh] lg:top-[0.25vh] absolute lg:left-[70vw] top-[38vh] h-[70vh] w-[100vw]">
          <p className="text-[#210124] lg:text-[65px] text-[63px] font-extrabold leading-[67px] lg:w-auto lg:h-auto relative lg:top-[30vh] top-[15vh] lg:right-[1vw] lg:text-right text-center tracking-[-0.05em]">
          stay tuned for more merch coming your way.
          </p>
        </div>
       
    </div>
    </>
  );
}

export default Merch3;