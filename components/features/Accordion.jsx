import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import { useContext, useEffect, useRef } from "react";
import { SmoothScrollContext } from "~/src/contexts/SmoothScrollContext";

const Accordion = ({ accordionData })=> {
    gsap.registerPlugin(Flip);
    const accordion = useRef(null);
    const {scroll} = useContext(SmoothScrollContext);

    useEffect(()=> {
        let groups = gsap.utils.toArray(".accordion-group");
        let defaults = {
            duration: 0.3,
            ease: "power1.inOut"
        };

        groups.forEach(el => {
            let header = el.querySelector(".accordion-header");
            let icon = el.querySelector(".accordion-header__icon");
            header.addEventListener("click", () => toggleMenu(el, icon));
        });

        function toggleMenu(group, icon) {
            let state = Flip.getState(".accordion-content, .accordion");
            let isActive = group.classList.contains("active");
            groups.forEach(el => el.classList.remove("active"));
            group.classList[isActive ? "remove" : "add"]("active");
            
            let tl = Flip.from(state, { ...defaults });
            tl.to(".accordion-header__icon", { 
                ...defaults, 
                rotation: (i, el) => el !== icon ? 90 : (isActive ? 90 : 180)
            }, 0);
        }

    }, [])

    const isActive =()=> {
        setTimeout(() => {
            scroll && scroll.update();
        }, 300);
    }

    return <div className="accordion">
        {
            accordionData?.map((item, index)=> (
                <div className={`accordion-group pb-12 ${index == 0 ? "active" : ""}`} ref={accordion} key={index}>
                    <a href="#" className="accordion-header mb-5 flex items-center justify-between" onClick={(e) => {e.preventDefault(); isActive();}}>
                        <h3 className="font-callEightNegativeOT leading-5 text-black text-xs lg:text-base uppercase pr-4">
                                {item.title}
                        </h3>
                        
                        <div className={`accordion-header__icon ${index == 0 ? "" : "rotate-90"}`}>
                            <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="1.35048" x2="15" y2="1.35048" stroke="black" strokeWidth="1.29904"/>
                            </svg>
                        </div>

                        <div className={`absolute right-0`}>
                            <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="1.35048" x2="15" y2="1.35048" stroke="black" strokeWidth="1.29904"/>
                            </svg>
                        </div>
                    </a>

                    <div className="accordion-content">
                        <p className="text-black text-xs lg:text-sm lg:text-base uppercase leading-8" dangerouslySetInnerHTML={{ __html: item.content}}></p>
                    </div>
                </div>
            ))
        }
    </div>
}

export default Accordion;