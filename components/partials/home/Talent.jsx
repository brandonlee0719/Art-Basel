import Image from "next/image";
import LetterSplit from "~/components/features/LetterSplit";
import { Menus } from "~/constants";

const Talent = () => {
  return (
    <section className="-mt-1 relative z-10 bg-black" id={Menus[1].ref}>
      <div className="grid grid-flex-row grid-cols-10">
        <div className="col-span-5 md:col-span-8 flex items-center md:items-end">
          <div className="px-6 xl:px-12 flex items-start flex-col-reverse xl:items-end flex-col xl:flex-row mb-10">
            <h1 className="uppercase text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl 3xl:text-10xl 4xl:text-11xl font-bold leading-none">
              
              <LetterSplit content="Talent"/>
            </h1>
          </div>
        </div>

        <div className="col-span-5 md:col-span-2">
          <div className="relative pt-[100%]"></div>
        </div>
      </div>

      <div className="grid grid-flex-row grid-cols-10">
        <div className="col-span-10 md:col-span-5 lg:col-span-4 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%]"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-10.png)`,
            }}
          >
          </div>

          <div className="relative md:absolute bg-black bottom-0 bg-black left-0 media flex items-center h-1/2 w-1/2 pt-[50%]">
            <div className="absolute top-8 left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
                TIMEBOY<br /> Artist, Composer & VJ
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-2 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%] order-2 md:order-1"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-11.png)`,
            }}
          ></div>

          <div className="order-1 md:order-2 relative md:absolute bottom-0 bg-black lg:relative media flex items-center w-1/2 lg:w-full pt-[50%] lg:pt-[100%]">
            <div className="absolute top-8 md:top-auto md:bottom-8 left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 md:bottom-auto md:top-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
                Kimberly Drew<br /> Writer, Curator & Activist
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-4 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%] overflow-hidden"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-12.png)`,
            }}
          > <span className="img-glitch clipPath absolute top-0 w-full h-full" style={{
            background: `no-repeat 60%/cover url(./assets/images/gallery/image-12.png)`,
          }}></span></div>

          <div className="relative md:absolute bottom-0 bg-black  lg:right-0 media flex items-center h-1/2 w-1/2 pt-[50%]">
            <div className="absolute top-8  left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
                GHETTO GASTRO<br />CULINARY COLLECTIVE
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-2 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%] order-2 md:order-1 overflow-hidden"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-13.png)`,
            }}
          > <span className="img-glitch clipPath absolute top-0 w-full h-full" style={{
            background: `no-repeat 60%/cover url(./assets/images/gallery/image-13.png)`,
          }}></span></div>

          <div className="order-1 md:order-2 relative md:absolute bottom-0 bg-black lg:relative media flex items-center h-1/2 w-1/2 pt-[50%] lg:pt-[100%]">
            <div className="absolute top-8 md:top-auto md:bottom-8 left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 md:bottom-auto md:top-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
                Uncle Waffles<br />Musician
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-4 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%]"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-14.png)`,
            }}
          >
          </div>

          <div className="relative md:absolute bottom-0 bg-black lg:right-0 media flex items-center h-1/2 w-1/2 pt-[50%]">
            <div className="absolute top-8 md:top-auto bottom-8 left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 md:bottom-auto md:top-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
              Jerome Lamaar<br />Creative Director   
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-4 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%] order-2 overflow-hidden"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-15.png)`,
            }}
          ><span className="img-glitch clipPath absolute top-0 w-full h-full" style={{
            background: `no-repeat 60%/cover url(./assets/images/gallery/image-15.png)`,
          }}></span></div>

          <div className="relative md:absolute order-1 bottom-0 bg-black lg:right-0 media flex items-center h-1/2 w-1/2 pt-[50%]">
            <div className="absolute top-8 left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
              Suzi Analogue<br /> musician
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-4 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%]"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-16.png)`,
            }}
          >
          </div>

          <div className="relative md:absolute bg-black bottom-0 bg-black left-0 media flex items-center h-1/2 w-1/2 pt-[50%]">
            <div className="absolute top-8 left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
                They Hate Change<br /> musicians
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-2 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%] order-2 md:order-1"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-17.png)`,
            }}
          ></div>

          <div className="order-1 md:order-2 relative md:absolute bottom-0 bg-black lg:relative media flex items-center w-1/2 lg:w-full pt-[50%] lg:pt-[100%]">
            <div className="absolute top-8 md:top-auto md:bottom-8 left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 md:bottom-auto md:top-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
                Donavan's Yard<br /> DJ
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-4 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%]"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-18.png)`,
            }}
          ></div>

          <div className="relative md:absolute bottom-0 bg-black right-0 media flex items-center h-1/2 w-1/2 pt-[50%]">
            <div className="absolute top-8  left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
                454 + Pig The Gemini<br />musicians
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-2 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%] order-2 md:order-1"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-19.png)`,
            }}
          ></div>

          <div className="order-1 md:order-2 relative md:absolute bottom-0 bg-black lg:relative media flex items-center h-1/2 w-1/2 pt-[50%] lg:pt-[100%]">
            <div className="absolute top-8 md:top-auto md:bottom-8 left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 md:bottom-auto md:top-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
                Shannon Stokes<br /> Stylist & Art Director
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-4 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%] overflow-hidden"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-20.png)`,
            }}
          > <span className="img-glitch clipPath absolute top-0 w-full h-full" style={{
            background: `no-repeat 60%/cover url(./assets/images/gallery/image-20.png)`,
          }}></span>
          </div>

          <div className="relative md:absolute bottom-0 bg-black lg:right-0 media flex items-center h-1/2 w-1/2 pt-[50%]">
            <div className="absolute top-8 md:top-auto bottom-8 left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 md:bottom-auto md:top-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
              Kristen White<br />   
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-5 lg:col-span-4 relative flex items-center md:block">
          <div
            className="media bg-secondary relative w-1/2 md:w-full pt-[50%] md:pt-[100%] order-2"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-21.png)`,
            }}
          ></div>

          <div className="relative md:absolute order-1 bottom-0 bg-black lg:right-0 media flex items-center h-1/2 w-1/2 pt-[50%]">
            <div className="absolute top-8 left-8">
              <img
                className=""
                src="./assets/images/plus-icon.svg"
                alt="Plus Icon"
              />
            </div>

            <div className="absolute bottom-8 left-8 uppercase">
              <p className="text-white mb-1 text-xs lg:text-sm leading-7">
              Aya Brown<br /> Artist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talent;
