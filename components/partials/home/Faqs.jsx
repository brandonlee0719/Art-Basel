import { useContext, useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import Accordion from "~/components/features/Accordion";
import LetterSplit from "~/components/features/LetterSplit";
import { Menus } from "~/constants";
import { SmoothScrollContext } from "~/src/contexts/SmoothScrollContext";

const Faqs = () => {
  const ref = useRef(null);
  const {scroll} = useContext(SmoothScrollContext);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(()=> {
    if(isVisible) {
      setTimeout(() => {
        scroll && scroll.update();
        console.log("Fixing the issues");
      }, 300);
    }
  }, [isVisible])

  const data = [
    {
      title: "WHERE AND WHEN IS NOT A TEST?",
      content: "NOT A TEST is happening at The Carl Fisher Clubhouse 2100 Washington Ave Miami Beach Florida 33139, on November 30 to December 2nd 2022"
    },
    {
      title: "WHAT TIME DOES THE EVENT START & END?",
      content: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times."
    },
    {
      title: "WHEN WILL YOU BE ANNOUNCING FULL PROGRAMMING AND WHAT CAN GUESTS EXPECT THERE?",
      content: "We’ll be announcing full programming in the coming weeks on our site and across our channels (@Vice on all platforms), so keep it locked there for more."
    },
    {
      title: "ARE EVENTS TICKETED?",
      content: "All events are free and require as RSVP. "
    },
    {
      title: "WHAT WILL ACCESS TO SPECIFIC EVENTS AT THE CLUBHOUSE GET YOU?",
      content: "Preferred admission to NOT A TEST, includes access to the clubhouse or yard depending and programming, light bites and open bar, and all day access to Timeboy's exhibition."
    },
    {
      title: "WHAT AGE DO YOU HAVE TO BE TO ATTEND?",
      content: "All Day TIme attendees must be 18 years or older; Noisey Nights events are 21+ and attendees will be required to show government issued ID upon entry to the event."
    },
    {
      title: "Is my ticket refundable or transferable?",
      content: "All tickets are non refundable or non transferable"
    },
    {
      title: "WHAT ARE YOUR COVID-19 POLICIES TO ENSURE GUEST SAFETY?",
      content: "The safety and health of our community is our top priority. All attendees & staff must present a Negative PCR test, taken 48 hours prior to the event OR proof of double vaccination. Masks are optional, unless ordinances are updated per city / state. We will continue to follow all local & government agency guidelines and will update COVID-19 guidelines as we get closer to the event. <br /><span class='block mb-10'></span>**NOTE this doesnt match ABMB's admission policy but this is more of a call out to share with VICE legal: <a href='https://www.artbasel.com/covid-19?lang=en' target='blank'>https://www.artbasel.com/covid-19?lang=en</a>"
    },
    {
      title: " IS NOT A TEST ADA ACCESSIBLE?",
      content: "Yes"
    },
    {
      title: " WHERE CAN I FIND PARKING?",
      content: "There is no parking available at the Carl Fisher Clubhouse. Here is a list of the municipal parking garages closest to the Carl Fisher Clubhouse:<br />909 Meridian Avenue<br />581 17th Street<br />1661 Pennsylvania Avenue<br/>604 17 Street <br />1735 Meridian Avenue<br />1662 Meridian Avenue <br />1550 Collins Avenue"
    },
    {
      title: "WHAT ITEMS ARE PROHIBITED AT THE EVENT?",
      content: "Weapons (guns, knives, or any weapons of any kind), Fireworks, or explosives<br/>Illegal substances<br />Glass containers or cans<br />Framed or Large backpacks, book bags or non-transparent bags over hand size (any bag that is not clear plastic, vinyl, or PVC and over 12”x6”x12” in size will not be allowed)<br />Food or drinks of any kind, including water. Clear, empty water bottles are not allowed<br />Coolers or picnic baskets<br />Radios, boomboxes, instruments or devices with amplified sound.<br />Laser pointers<br />Pets of any kind (except for working service dogs.)<br />Items for vending. Unauthorized vendors will not be allowed.<br />Professional Cameras"
    },
    {
      title: "IS THERE A SECURITY INSPECTION ? ",
      content: "All visitors and their belongings are subject to a thorough inspection before entering the premises. Visitors must comply with requests and instructions from the onsite security staff. Failure to do so may result in denial of admittance or removal from the show."
    },
    {
      title: "What is your REMOVAL policy?",
      content: "The following may result in immediate removal of a visitor from the premises and/or refusal of admission to future VICE events:<br /><span class='mb-10 block'></span>Failure to comply with these rules or any other rules applicable to the venue or posted at the premises<br/>Failure to comply with requests and instructions from the onsite security staff<br />Any behaviour that gives rise to justified complaints from visitors, exhibitors, or others<br />Any disruptive behaviour or unsanctioned acts of performance or protest (including, without limitation, unsanctioned performative art)<br />Any dangerous or destructive behaviour endangering other visitors or artworks<br />ASSUMPTION OF RISK<span class='mb-10 block'></span>By entering the NOT A TEST  premises, visitor assumes all risks incident to the show, including but not limited to the risk of lost, stolen, or damaged property, personal injury and death, and Holder further acknowledges all risks involved in attendance, including the risk of injury, death and/or property damage or loss (whether foreseen or unforeseen, known or unknown).<span class='mb-10 block'></span>By entering NOT A TEST, you agree to the entrance disclaimer."
    }
  ]

  return (
    <section className="relative z-10 faqs bg-white" id={Menus[2].ref} ref={ref}>
      <div className="grid grid-flex-row grid-cols-10">
        <div className="col-span-2 hidden lg:block"></div>

        <div className="col-span-5 lg:col-span-4 flex items-end pl-5 lg:pl-0">
          <div className="items-start mb-2 hidden lg:flex">
            <img className="pt-3" src="./assets/images/plus-black-icon.svg" alt="plus icon" />
            <h3 className="ml-7 uppercase text-black font-bold text-5xl">
              <LetterSplit content="LOCATION &<br />"/>
              <LetterSplit content="FAQS"/>
            </h3>
          </div>
        </div>
        <div className="col-span-5 lg:col-span-4 pt-[100%] lg:pt-[50%] bg-black"></div>
      </div>

      <div className="grid grid-flex-row grid-cols-10 pt-10 lg:pt-40">
        <div className="col-span-2 hidden lg:block"></div>
        <div className="col-span-10 lg:col-span-8">
          <div className="flex flex-col lg:hidden items-start mb-20 px-6">
            <img src="./assets/images/plus-black-icon.svg" alt="plus icon" />
            <h3 className="uppercase text-black font-bold text-5xl mt-10">
              <LetterSplit content="LOCATION &<br />"/>
              <LetterSplit content="FAQS"/>
            </h3>
          </div>

          <div className="grid grid-flex-row grid-cols-8 px-6 lg:px-0">
            <div className="col-span-8 mb-20 lg:mb-48 overflow-hidden">
              <div className="grid grid-flex-row grid-cols-12 gap-20 items-center">
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-call mb-12 text-xs lg:text-base uppercase">
                    <span className="inline-block text-black">
                      Location
                    </span>
                  </h3>
                  <h3 className="font-callEightNegativeOT leading-5 text-black mb-5 text-xs lg:text-md uppercase">
                      WHERE AND WHEN IS NOT A TEST?
                  </h3>

                  <p className="text-black text-xs lg:text-sm lg:text-base uppercase leading-8">
                    NOT A TEST is happening at The Carl<br className="md:hidden"/> Fisher Clubhouse 2100 Washington Ave<br className="md:hidden"/> Miami Beach Florida 33139, on November 30<br className="md:hidden"/> to December 2nd 2022
                  </p>
                </div>

                <div className="col-span-12 md:col-span-8">
                  <img className="max-h-[560px] ml-auto" src="./assets/images/map.jpg" alt="map"/>
                </div>
              </div>
            </div>

            <div className="col-span-12 xl:col-span-6 lg:pr-12 xl:pr-0 xl:mr-40 xl:-mb-[10rem] relative xl:z-10">
              <p className="text-black text-xs lg:text-sm lg:text-base uppercase leading-8 mb-16">Faqs</p>

              <Accordion accordionData={data}/>
            </div>

            {/* <div className="col-span-2 bg-black pt-[100%] mt-40 hidden md:block"></div> */}
          </div>
        </div>
        <div className="col-span-8 hidden xl:block"></div>
        <div className="col-span-2 hidden xl:block bg-black pt-[100%]"></div>
      </div>
    </section>
  );
};

export default Faqs;
