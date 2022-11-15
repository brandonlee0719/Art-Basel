import Footer from '~/components/common/Footer'
import About from '~/components/partials/home/About'
import Faqs from '~/components/partials/home/Faqs'
import Gallery from '~/components/partials/home/Gallery'
import Intro from '~/components/partials/home/Intro'
import Schedule from '~/components/partials/home/Schedule'
import Talent from '~/components/partials/home/Talent'

export default function Home() {


    return (
      <>
      <Intro />
      <Gallery />
      
      <section>
        <div className="grid grid-flex-row grid-cols-10">
          <div className="col-span-10 md:col-span-4 bg-white flex items-center pb-7 md:pb-0">
            <div className="relative media">
              <div className="uppercase px-6 xl:px-12">
                <p className="bg-white text-dark mb-1 text-xs lg:text-sm mb-7">
                  THE CARL FISHER CLUBHOUSE
                </p>
                <p className="inline-block bg-white text-dark leading-7 text-xs lg:text-sm ">
                  2100 Washington Ave,
                  <br /> Miami Beach, FL 33139,
                  <br /> United States
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-10 md:col-span-2 bg-white flex items-center pb-7 md:pb-0">
            <div className="relative media">
              <div className="uppercase pl-6 pr-6 md:pl-0 md:pr-5">
                <p className="bg-white text-dark mb-1 text-xs lg:text-sm">
                  NOV 30 - DEC 02 2022
                </p>
                <p className="inline-block bg-white text-dark text-xs lg:text-sm">
                  3pm - 11pm daily
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-5 md:col-span-2">
            <div className="relative media bg-white flex items-center justify-start  pt-[100%] px-6 md:px-0">
              <div className="absolute top-1/2 -translate-y-1/2 uppercase">
                <p className="text-black font-callEightNegativeOT leading-5 mb-1 text-xs lg:text-sm">
                  OPEN TO THE PUBLIC<br />AND TICKETED
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-5 md:col-span-2 hidden md:block">
            <div className="relative media bg-black flex items-center justify-start pt-[100%]">
              
            </div>
          </div>

          <div className="col-span-2 hidden md:block">
            <div className="relative media bg-white flex items-center justify-start pt-[100%]">
              <img className='absolute top-0 left-0 mx-12' src='./assets/images/plus-black-icon.svg' alt='icon'/>
            </div>
          </div>

          <div className="relative col-span-2 hidden md:block bg-black"></div>

          <div className="col-span-2 hidden md:block">
            <div className="relative media bg-black flex items-center justify-start  pt-[100%]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <img className='absolute top-0 -left-24' src='./assets/images/plus-icon.svg' alt='icon'/>

                <p className="font-callEightNegativeOT leading-5  mb-1 text-xs lg:text-sm">
                  VICE @ ART BASEL,<br /> MIAMI BEACH
                </p>
              </div>
            </div>
          </div>

          <div className="relative col-span-2 hidden md:block bg-black"></div>
        </div>

        <div className="grid grid-flex-row grid-cols-10">
          <div className="col-span-10 md:col-span-4 order-2 md:order-1 flex">
            <div className="grid grid-flex-row grid-cols-10 w-full mt-auto">
              <div className="col-span-5 flex items-end ">
                <div
                  className="relative media bg-secondary w-full flex items-center justify-start pt-[100%]"
                  style={{
                    background: `no-repeat 60%/cover url(./assets/images/gallery/image-8.png)`,
                  }}
                ></div>
              </div>

              <div className="col-span-5">
                <div className="relative media bg-black flex items-center justify-start pt-[100%]"></div>
              </div>
            </div>
          </div>

          <div className="col-span-10 md:col-span-6 order-1 md:order-2 px-6 md:px-0 pt-16 md:pt-0 pb-20 md:pb-28">
            <h2 className="font-bold text-xl lg:text-3xl md:mr-32 mb-10">
              VICE is taking over the historic Carl Fisher Clubhouse (centrally located next to the Art Basel Miami Beach Convention Center) for a 72-hour residency.
            </h2>

            <h2 className="font-bold text-xl lg:text-3xl md:mr-32 mb-10">
              In the Main Clubhouse, Curator and Author, Kimberly Drew of Black Futures sits down with the tastemakers and visionaries pushing Hip-Hop forward, including Ghetto Gastro and Jerome Lamaar.
            </h2>

            <h2 className="font-bold text-xl lg:text-3xl md:mr-32 mb-10">
              In The Yard, join NOISEY for afternoon DJ sets and evening showcases from Donovan’s Yard, Uncle Waffles, and more. 
            </h2>

            <h2 className="font-bold text-xl lg:text-3xl md:mr-32">
              In Inflection, a multimedia installation and immersive group experience, visual artist and composer Time Boy explores the concept of pressure on Hip-Hop’s originators and present day creators and how it results in innovation in the genre, culture and beyond.
            </h2>
          </div>
        </div>

        <div className="grid grid-flex-row grid-cols-10">
          <div className="col-span-10 md:col-span-4">
            <div
              className="relative media bg-secondary flex items-center justify-start pt-[100%]"
              style={{
                background: `no-repeat 60%/cover url(./assets/images/gallery/image-9.png)`,
              }}
            > <span className="img-glitch clipPath absolute top-0 w-full h-full" style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-9.png)`,
            }}></span></div>
          </div>

          <div className="col-span-6 hidden md:block">
            <div className="grid grid-flex-row grid-cols-12">
              <div className="col-span-4">
                <div className="relative media bg-black flex items-center justify-start pt-[100%]"></div>
              </div>

              <div className="col-span-4">
                <div className="relative media bg-black flex items-center justify-start  pt-[100%]"></div>
              </div>

              <div className="col-span-4">
                <div className="relative media bg-white flex items-center justify-start pt-[100%]"></div>
              </div>

              <div className="col-span-4">
                <div className="relative media bg-dark flex items-center justify-start pt-[100%]" style={{
                  background: `no-repeat 60%/cover url(./assets/images/gallery/image-7.png)`,
                }}></div>
              </div>

              <div className="col-span-4">
                <div className="relative media bg-white flex items-center justify-start pt-[100%]"></div>
              </div>

              <div className="col-span-4">
                <div className="relative media bg-white flex items-center justify-start pt-[100%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Schedule />
      <Talent />
      <Faqs />
      <About />
      <Footer />
      </>
  )
}
