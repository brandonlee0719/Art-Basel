import { useEffect, useState } from "react";
import LetterSplit from "~/components/features/LetterSplit";

const Intro = () => {
  const [active, setActive] = useState(false);

  useEffect(()=> {
    setTimeout(() => {
      setActive(true);
    }, 500);
  }, [])

  return (
    <section className="intro">
      <div className="header-bottom hidden sm:block">
          <div className="container-fluid flex items-center justify-between px-6 xl:px-12">
            <div className="header-left">
              <p className="text-xs lg:text-sm font-normal uppercase">
                Carl Fisher Clubhouse, <br />
                Miami Beach. Florida
              </p>
            </div>

            <div className="header-right text-right">
              <p className="text-xs lg:text-sm font-normal uppercase">
                Open To The Public <br />
                And Ticketed
              </p>
            </div>
          </div>
        </div>

      <div className="container-fluid px-6 xl:px-126 pb-11 pt-16">
        <div className="intro-content max-w-[1020px] text-justify  sm:text-center 2xl:text-justify mx-auto" data-scroll data-scroll-delay="0.1" data-scroll-speed="2">
          <h1 className="sm:hidden uppercase text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
            <LetterSplit adClass="flex justify-center items-center" content="A three-day time-hopping tour of what’s next in Hip-Hop, brought to you by VICE" isActive={active}/>
          </h1>

          <h1 className="hidden sm:block uppercase text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
            <LetterSplit adClass="flex justify-center md:justify-between items-center" content="A three-day time-" isActive={active}/>
          </h1>

          <h1 className="hidden sm:block uppercase text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
            <LetterSplit adClass="flex justify-center md:justify-between items-center" content="hopping tour of what’s" isActive={active}/>
          </h1>

          <h1 className="hidden sm:block uppercase text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
            <LetterSplit adClass="flex justify-center md:justify-between items-center xl:flex-nowrap"  content="next in Hip-Hop, brought" isActive={active}/>
          </h1>

          <h1 className="hidden sm:block uppercase text-5xl md:text-6xl lg:text-7xl font-bold leading-none text-center">
            <LetterSplit adClass="flex justify-center md:justify-between items-center" content="to you by VICE" isActive={active}/>
          </h1>

          <p className="text-base lg:text-xl text-center mb-3 sm:mb-4 mt-6">
            NOV 30 - DEC 02 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
