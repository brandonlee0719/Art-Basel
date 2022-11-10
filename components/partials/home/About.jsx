import LetterSplit from "~/components/features/LetterSplit";
import { Menus } from "~/constants";

const About = () => {
  return (
    <section className="relative z-10" id={Menus[3].ref}>
      <div className="grid grid-flex-row grid-cols-10 bg-black">
        <div className="col-span-5 md:col-span-2">
          <div className="grid grid-flex-row grid-cols-10">
            <div className="relative col-span-12 bg-black md:bg-white media flex items-center uppercase pt-[100%]">
              <div className="absolute top-1/2 -translate-y-1/2 px-6 xl:px-12 md:hidden">
                <p className="bg-white text-black mb-1 text-xs lg:text-sm">VICE @ ART BASEL,</p>
                <p className="inline-block bg-white text-black text-xs lg:text-sm mb-2">MIAMI BEACH</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 md:col-span-2 md:hidden mb-40">
          <div className="grid grid-flex-row grid-cols-10">
            <div className="col-span-12 bg-white md:bg-white pt-[100%]"></div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-8">
          <div className="grid grid-flex-row grid-cols-8 uppercase z-10 bg-black relative">
            <div className="col-span-8 xl:col-span-6 bg-black px-6 md:px-12 md:pt-16 md:py-12 2xl:px-24 2xl:pt-28 2xl:py-20">
              <h3 className="mb-9 md:mb-12 uppercase font-bold text-2xl sm:text-3xl">
                
                <LetterSplit content="VICE MEDIA GROUP"/>
              </h3>

              <p className="leading-7 text-xs lg:text-sm mb-16 md:mb-24">
                VICE Media Group is a global multi-platform media company. Launched
                in 1994, VICE has offices across 25 countries across the globe with
                a focus on five key businesses: VICE.com, an award-winning
                international network of digital content; VICE STUDIOS, a feature
                film and television production studio; VICE TV, an Emmy-winning
                international television network; a Peabody award-winning NEWS
                division with the most Emmy-awarded nightly news broadcast; and
                VIRTUE, a global, full-service creative agency. VICE Media Group’s
                portfolio includes Refinery29, the leading global media and
                entertainment company focused on women; PULSE Films, a London-based
                next-generation production studio with outposts in Los Angeles, New
                York, Paris and Berlin; and i-D, a global digital and quarterly
                magazine defining fashion and contemporary culture and design.
              </p>

              <h3 className="mb-9 md:mb-12 uppercase font-bold text-2xl sm:text-3xl">
                
                <LetterSplit content="NOISEY: MUSIC BY VICE"/>
              </h3>

              <p className="leading-7 text-xs lg:text-sm mb-7">
                Since 2011, VNoisey has been curating emerging talent from around the world for our audience’s eyes and ears, in addition to covering industry mainstays in an unapologetically VICE manner.
              </p>

              <p className="leading-7 text-xs lg:text-sm">
                From editorial coverage of talent and cultural phenomena, original music videos as a part of Noisey Next, tour diaries on TikTok and performances under Noisey Nights, Noisey is a champion of talent who are the moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
