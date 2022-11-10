import Image from "next/image";
import LetterSplit from "~/components/features/LetterSplit";

const Gallery = () => {
  return (
    <section className="pt-2 sm:pt-28">
      <div className="container-fluid px-6 xl:px-12">
        <div className="flex items-center justify-center sm:justify-between pb-5 sm:pb-12">
          <img
            className="hidden sm:block"
            src="./assets/images/plus-icon.svg"
            alt="Plus Icon"
          />

          <div className="flex items-center justify-center">
            <img className="max-w-[80px] sm:max-w-[120px] md:max-w-none" src="./assets/images/logo.svg" alt=""/>

            <img className="max-w-[30px] sm:max-w-[60px] md:max-w-none mx-5" src="./assets/images/x.svg" alt=""/>

            <img className="max-w-[50px] sm:max-w-[90px] md:max-w-none" src="./assets/images/art.svg" alt=""/>
          </div>

          <img
            className="hidden sm:block"
            src="./assets/images/plus-icon.svg"
            alt="Plus Icon"
          />
        </div>
        
        <img className="w-full max-h-[919px] mb-12 -ml-[2px]"  src="./assets/images/text.png" alt="text svg"/>
      </div>

      <div className="grid grid-flex-row grid-cols-10">
        <div className="col-span-10 md:col-span-5 lg:col-span-4 order-2 md:order-1">
          <div className="grid grid-flex-row grid-cols-12">
            <div className="col-span-6 hidden md:block">
              <div
                className="media bg-secondary pt-[100%] overflow-hidden relative"
                style={{
                  background: `no-repeat 60%/cover url(./assets/images/gallery/image-1.png)`,
                }}
              > <span className="img-glitch clipPath absolute top-0 w-full h-full" style={{
                background: `no-repeat 60%/cover url(./assets/images/gallery/image-1.png)`,
              }}></span></div>
            </div>

            <div className="col-span-6">
              <div className="media bg-white md:bg-black pt-[100%]"></div>
            </div>

            <div className="col-span-6 md:col-span-12">
              <div
                className="media bg-secondary pt-[100%] glitch-img"
                style={{
                  background: `no-repeat 60%/cover url(./assets/images/gallery/image-4.png)`,
                }}
              ></div>
            </div>

            <div className="col-span-6 hidden md:block">
              <div
                className="media bg-black pt-[100%]"
              ></div>
            </div>

            <div className="col-span-6 hidden md:block">
              <div
                className="media bg-black pt-[100%]"
              ></div>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-4 order-1 md:order-2">
          <div className="grid grid-flex-row grid-cols-12">
            <div className="col-span-12 relative overflow-hidden">
              <div
                className="media bg-secondary relative w-full pt-[100%] order-2"
                style={{
                  background: `no-repeat 60%/cover url(./assets/images/gallery/image-2.png)`,
                }}
              ><span className="img-glitch clipPath absolute top-0 w-full h-full" style={{
                background: `no-repeat 60%/cover url(./assets/images/gallery/image-2.png)`,
              }}></span></div>

              <div className="relative md:absolute bottom-0 bg-black left-0 media flex items-center md:h-1/2 w-1/2 pt-[50%] order-1" style={{
                  background: `no-repeat 60%/cover url(./assets/images/gallery/image-5.png)`,
                }}>

              </div>
            </div>

            <div className="col-span-6 hidden md:block">
              <div className="media bg-white pt-[100%]"></div>
            </div>

            <div className="col-span-6 hidden md:block">
              <div className="media bg-black pt-[100%]"></div>
            </div>

            <div className="col-span-6 hidden md:block">
              <div className="media bg-black pt-[100%]"></div>
            </div>

            <div className="col-span-6 hidden md:block">
              <div className="media bg-white pt-[100%]"></div>
            </div>
          </div>
        </div>

        <div className="col-span-10 lg:col-span-2 order-3 hidden md:block">
          <div className="grid grid-flex-row grid-cols-10">
            <div className="col-span-5 lg:col-span-10 order-2 md:order-1">
              <div
                className="media bg-secondary pt-[100%]"
                style={{
                  background: `no-repeat 60%/cover url(./assets/images/gallery/image-3.png)`,
                }}
              ></div>
            </div>

            <div className="col-span-5 lg:col-span-10 md:hidden lg:block order-1 md:order-2">
              <div className="media bg-white md:bg-black pt-[100%]"></div>
            </div>

            <div className="col-span-5 lg:col-span-10 hidden md:block order-3">
              <div
                className="media bg-secondary pt-[100%] relative overflow-hidden"
                style={{
                  background: `no-repeat 60%/cover url(./assets/images/gallery/image-6.png)`,
                }}
              > <span className="img-glitch clipPath absolute top-0 w-full h-full" style={{
                background: `no-repeat 60%/cover url(./assets/images/gallery/image-6.png)`,
              }}></span></div>
            </div>

            <div className="col-span-5 lg:col-span-10 hidden lg:block order-4">
              <div className="media bg-black pt-[100%]"></div>
            </div>
          </div>
        </div>

        <div className="col-span-5 md:col-span-2 order-4">
          <div className="relative media bg-black flex items-center pt-[100%]">
            <div className="absolute top-1/2 -translate-y-1/2 px-6 xl:px-12">
              <p className="leading-5 mb-1 text-xs lg:text-sm">
                VICE @ ART BASEL, <br />MIAMI BEACH
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 order-5 hidden md:block">
          <div className="media flex items-center justify-center bg-white pt-[100%]"></div>
        </div>

        <div className="col-span-5 md:col-span-2 order-6">
          <div className="relative media bg-white flex items-center justify-start pt-[100%] px-5 md:px-0">
            <div className="absolute top-1/2 -translate-y-1/2 hidden md:block">
              <p className="text-dark leading-5 mb-1 text-xs lg:text-sm">
                VICE @ ART BASEL, <br/> MIAMI BEACH
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-white w-full h-full order-7"></div>
      </div>

      <div className="bg-white -mt-1 pt-28 md:pt-0">
        <div className="grid grid-flex-row grid-cols-10">
          <div className="col-span-4 hidden md:block"></div>
          <div className="col-span-12 md:col-span-6 px-6 md:px-0 ">
            <h2 className="font-bold text-xl md:text-3xl 2xl:text-4xl 3xl:text-5xl text-dark lg:mr-32 mb-7 md:mb-16">
              The first 50 years of Hip-Hop was defined by unbridled creative expression and innovation.
            </h2>

            <h2 className="font-bold text-xl md:text-3xl 2xl:text-4xl 3xl:text-5xl text-dark lg:mr-32">
              What's next? Hang out with VICE and a community of creators, artists and musicians as we forecast the future of this boundary-pushing art form. Plus performances, parties, food, music, talks & more
            </h2>
          </div>
        </div>

        <div className="container-fluid px-6 xl:px-12 md:pt-44">
          <img
            className="4xl:ml-0 mb-6 mt-20 md:-mt-16"
            src="./assets/images/plus-black-icon.svg"
            alt="plus svg icon"
          />
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl 3xl:text-10xl 4xl:text-11xl font-bold text-dark leading-none uppercase text-justify  4xl:text-justify pb-12 lg:pb-0">
            <LetterSplit content="Vice<br/>@ Art Basel,<br/>Miami Beach" />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
