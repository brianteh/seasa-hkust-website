import { merch } from '@/data/merch.js'

const Merch = () => {
  const { featured, teaser } = merch

  return (
    <>
      {/* Featured merchandise */}
      <section id="merch" className="relative overflow-hidden bg-[#4D2A17]">
        <div className="relative aspect-[442/663] w-full md:aspect-[466/527] lg:aspect-[1820/748]">
          <img
            src={featured.image}
            alt={featured.name}
            className="absolute left-1/2 top-[10.7%] z-10 w-[86.9%] max-w-none -translate-x-1/2 md:top-[28.3%] md:w-[66.6%] lg:-bottom-[7.2%] lg:left-[1.43%] lg:top-auto lg:w-[40.47vw] lg:translate-x-0"
          />

          {/* Decorative wordmark */}
          <h2
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[13.1%] z-20 -translate-x-1/2 select-none whitespace-nowrap text-[22.3vw] font-extrabold leading-[0.78] text-white md:top-[2.7%] md:text-[18vw] lg:left-[30.77%] lg:top-[2.1%] lg:translate-x-0 lg:text-[15.87vw]"
          >
            VARSITY
          </h2>
          <h2
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[67.6%] z-20 -translate-x-1/2 select-none whitespace-nowrap text-[22.3vw] font-extrabold leading-[0.78] text-white md:top-[26.6%] md:text-[18vw] lg:left-[40.6%] lg:top-[51.1%] lg:translate-x-0 lg:text-[15.87vw] lg:tracking-[-0.047em]"
          >
            JACKET
          </h2>

          <p className="absolute left-1/2 top-[82.9%] z-30 w-full -translate-x-1/2 text-center text-[4.8vw] font-medium text-[#FFD93A] md:top-[57.9%] md:text-[2.7vw] lg:bottom-[6.6%] lg:left-[45%] lg:right-[23%] lg:top-auto lg:w-auto lg:translate-x-0 lg:text-[1.36vw]">
            {featured.description}
          </p>

          <a
            href={featured.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-1/2 top-[88.2%] z-30 flex w-[69%] -translate-x-1/2 items-center justify-center rounded-lg bg-[#FFD93A] px-4 py-[2.8vw] text-[6.9vw] font-bold leading-tight text-[#4D2A17] transition-colors hover:bg-yellow-400 md:top-[68.9%] md:w-[34.1%] md:py-[1.5vw] md:text-[3.3vw] lg:bottom-[5.1%] lg:left-auto lg:right-[2.2%] lg:top-auto lg:w-[17%] lg:translate-x-0 lg:px-[2vw] lg:py-[0.74vw] lg:text-[1.68vw]"
          >
            Order Now
          </a>

          {/* Accessible heading (the visible wordmark is decorative) */}
          <h2 className="sr-only">{featured.name}</h2>
        </div>
      </section>

      {/* Coming soon teaser */}
      <section className="grid lg:grid-cols-[2fr_1fr]">
        <img src={teaser.image} alt="More SEASA merchandise" className="h-[60vh] w-full object-cover lg:h-[80vh]" />
        <div className="flex items-center justify-center bg-[#DECEC0] p-10">
          <p className="text-center text-3xl font-extrabold tracking-[-0.05em] text-[#210124] sm:text-4xl lg:text-5xl">
            {teaser.message}
          </p>
        </div>
      </section>
    </>
  )
}

export default Merch
