import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

const LetterSplit =({adClass="", content="Letter Split", isInLink=false, link="#", isActive=false})=> {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(()=> {
    if(isVisible && !ref.current.classList.contains("is-active")) {
      setTimeout(() => {
        ref.current.classList.add("is-active");
      }, 200);
    }
  }, [isVisible])

  if (!content) return ;

    return <span className={`letter-split ${isActive ? "is-active" : ""} ${adClass}`} ref={ref}>
      {
        isInLink ? 
        <a href={link}>
          {
            content.replace(/\<\s?br\s?\/?\s?\>/g, " [br] ").trim().split(" ").map((letters, index) => (
              <span data-word key={index} className="pr-3">            
                {
                  letters.trim() == "[br]" ? <br /> : letters.trim().split("").map((letter, letterIndex) => (
                    <span data-letter className={`(a:hover &):anim:0.3s,easeOut,${((Math.random() * 15) >> 0) * 0.02}s,forwards,blink_hover!`} key={letterIndex}>
                      <span data-letter className={`o:0 anim-in:o:0 anim-in:anim:0.3s,easeOut,${((Math.random() * 15) >> 0) * 0.02}s,forwards,blink!`}>{letter}</span>
                    </span>
                  ))
                }
              </span>
            ))
          }
        </a>
        :
        content.replace(/\<\s?br\s?\/?\s?\>/g, " [br] ").trim().split(" ").map((letters, index) => (
          <span data-word key={index} className="pr-3">            
            {
              letters.trim() == "[br]" ? <br /> : letters.trim().split("").map((letter, letterIndex) => (
                <span data-letter className={`(a:hover &):anim:0.3s,easeOut,${((Math.random() * 15) >> 0) * 0.02}s,forwards,blink_hover!`} key={letterIndex}>
                  <span data-letter className={`o:0 anim-in:o:0 anim-in:anim:0.3s,easeOut,${((Math.random() * 15) >> 0) * 0.02}s,forwards,blink!`}>{letter}</span>
                </span>
              ))
            }
          </span>
        ))
      }
    </span>;
}

export default LetterSplit;