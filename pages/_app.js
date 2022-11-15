import Helmet from "react-helmet";
import Header from "~/components/common/Header";

import "../styles/style.css";
import "../styles/base.css";
import "../styles/letter.css";
import "../styles/globals.scss";
import Modal from "~/components/features/Modal";
import MobileMenu from "~/components/common/Menu";
import ProgressIndicator from "~/components/features/ProgressIndicator";
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Loader from "~/components/features/Loader";
import gsap, { Power3 } from "gsap";
import { SmoothScrollContext } from "~/src/contexts/SmoothScrollContext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function NextApp({ Component, pageProps }) {
  gsap.registerPlugin(ScrollTrigger);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  
  useEffect(() => {

    // 

    var percentNum = 0;

    function stopFunc(num){
      if(num >= 100){
        clearInterval(addNum);
      }
    }
  
    let addNum = setInterval(function(){                
      percentNum++;

      setCount(percentNum);
      stopFunc(percentNum);
  
    },5);  
  }, []);

  useEffect(()=> {
    const tl = gsap.timeline();
    const loader = document.querySelector(".loader");
    const loaderContent = document.querySelector(".loader__content");
    const percent = document.querySelector(".loader-percent");
    const loaderOverlay = document.querySelector(".loader__box-container");

    if(count >= 100) {
      tl.to({loaderContent, percent},{autoAlpha:0}).to(loader,{delay: 0.2,autoAlpha:0}).call(
        () => (setLoading(false)), null, ">-0.9").to(".page-wrapper", {alpha: 1, ease: Power3.easeIn});
    } else {
      tl.to(loaderOverlay, {top: `${99 - count}%`})
    }
  }, [count])

  return (
    <>
    <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>React Template</title>

        <meta name="keywords" content="React Template" />
        <meta name="description" content="React Template" />
        <meta name="author" content="SW-THEMES" />
      </Helmet>

      
      {
        // loading && 
        <div className={`loader fixed w-full h-full bg-white top-0 z-10`}>
          <span className="loader-percent block absolute top-10 left-10 text-md mix-blend-mode-difference z-10">{count > 100 ? 100 : count}%</span>
          <div className="loader__content relative z-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              width="500"
              height="500"
          >
              <source src="./assets/video/loading.mp4" type="video/mp4"></source>
          </video>
          </div>
          <div className="loader__box-container bg-dark absolute top-full w-full h-full left-0"></div>
        </div>
      }

      

      <div className="page-wrapper is-ready" data-scroll-container>
        {
          !loading ? 
          <>
            <Header />
            <Component {...pageProps} />
            <Modal />
          </>
          :
          ""
        }
      </div>
    </>
  )
}
