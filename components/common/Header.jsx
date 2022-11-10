import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { Menus } from "~/constants";

const Header = () => {
  const textAnimate = useRef(null);
  const menu = useRef(null);
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    let line = gsap.utils.selector(textAnimate.current);

    const links = line("a"),
      tl = horizontalLoop(links, {
        repeat: -1,
        speed: 1 * 0.5,
        paddingRight: parseFloat(
          gsap.getProperty(links[0], "marginRight", "px")
        ), // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
      });
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => tl.pause());
      link.addEventListener("mouseleave", () => tl.resume());
    });
  }, []);

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
    }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;

    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });

    gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    return tl;
  }

  return (
    <header className="pb-5 sm:pb-0 sticky top-0 z-20" id="home">
      <div
        className="header-top bg-white mt-2 xl:my-2 overflow-hidden"
        ref={textAnimate}
      >
        <Link href={{ query: { section: "schedule" } }}>
          <div className="flex items-center">
            {new Array(10).fill(1).map((item, index) => (
              <a
                className="whitespace-nowrap flex items-center py-[4px]"
                href="#"
                key={index}
              >
                <div className={`pt-1 text-xs lg:text-sm uppercase text-black`}>
                  Buy Tickets Now
                </div>
                <svg
                  className="mx-3"
                  width={13}
                  height={12}
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.466797 5.27399H2.13593V3.60486H3.80505V1.93573H5.47418V0.266602H7.14331V1.93573H8.81244V3.60486H10.4816V5.27399H12.1507V6.94312H10.4816V8.61225H8.81244V10.2814H7.14331V11.9505H5.47418V10.2814H3.80505V8.61225H2.13593V6.94312H0.466797V5.27399Z"
                    fill="black"
                  />
                </svg>

                <div className={`pt-1 text-xs lg:text-smX uppercase text-black font-callEightNegativeOT`}>
                  Buy Tickets Now
                </div>

                <svg
                  className="mx-3"
                  width={13}
                  height={12}
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.466797 5.27399H2.13593V3.60486H3.80505V1.93573H5.47418V0.266602H7.14331V1.93573H8.81244V3.60486H10.4816V5.27399H12.1507V6.94312H10.4816V8.61225H8.81244V10.2814H7.14331V11.9505H5.47418V10.2814H3.80505V8.61225H2.13593V6.94312H0.466797V5.27399Z"
                    fill="black"
                  />
                </svg>
              </a>
            ))}
          </div>
        </Link>
      </div>

      <div className="header-middle">
        <div className="container-fluid flex items-center justify-between px-6 xl:px-12">
          <div className="header-left">
            <a href="https://www.vice.com/">
              <svg className="mb-9" width="70" height="23" viewBox="0 0 70 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.1725 5.63716C46.7505 6.31924 48.0126 6.2827 48.7675 6.78209C47.7531 7.05005 46.4792 7.05005 45.5591 7.41545C45.7714 6.83081 45.9719 6.2218 46.1725 5.63716ZM34.5065 13.4811C33.8695 15.0402 35.0137 15.844 36.3584 15.844C39.3663 15.844 41.5603 13.2497 44.6272 13.2984C45.0047 12.4458 44.7216 11.3374 44.3205 10.7528C44.1672 11.2643 44.0374 11.7759 43.7661 12.1535C41.7491 12.2753 39.6848 12.6894 37.7149 12.665C38.0688 11.0816 38.7058 9.43734 39.0125 8.01227C37.6442 9.72966 35.4148 11.2765 34.5065 13.4811ZM49.204 0.53372C48.7203 0.558081 48.166 0.704241 47.7177 0.655521C47.0572 0.606801 46.491 0.265759 45.8658 0.156139C42.5866 -0.416323 39.5787 0.692061 37.2785 1.75173C36.7949 1.97097 35.9456 2.62869 35.4855 2.64087C34.9312 2.66523 33.9403 2.09277 33.1972 1.87353C29.9298 0.899122 24.9402 -0.367603 22.3923 1.67865C19.1839 1.20362 16.2349 2.01969 13.805 2.76267C13.6753 0.777322 11.8823 -0.404143 9.79447 0.217039C8.40257 0.631161 7.25839 1.43504 5.8429 2.00751C3.0827 3.10371 0.287115 5.45446 0.475846 9.14501C0.558416 10.8746 1.28975 12.2996 1.77338 13.542C2.2688 14.8331 2.7996 15.8806 3.6253 17.3665C3.40119 17.805 3.20066 18.0852 3.12988 18.5724C2.59908 22.7136 7.95433 22.8476 10.7853 21.6296C13.227 20.5699 15.7867 18.7064 17.5207 17.3544C16.1406 23.4931 25.4592 23.7611 27.8301 20.6673C31.1565 23.2373 38.3519 22.945 41.9024 20.7891C45.1934 23.5175 52.4714 22.4822 56.9066 21.4225C59.195 20.8744 61.212 20.4359 62.7101 19.3154C64.2435 18.1704 65.199 16.4165 65.6118 14.151C65.3051 13.2862 64.7625 12.6529 64.2553 11.983C64.503 11.4349 64.5856 10.4361 64.444 9.69312C66.3785 8.26805 67.9946 6.0391 69.4454 4.1512C69.6224 3.91977 69.9526 3.62745 69.8701 3.32295C63.2527 2.27547 56.8712 0.143959 49.204 0.53372ZM65.4467 5.0647C65.5646 5.35702 65.2108 5.52754 65.081 5.69806C63.7953 7.26929 62.25 8.45075 59.5252 8.63345C57.5671 8.75525 55.5501 8.32895 53.474 8.37767C53.0258 8.74307 52.9668 9.51042 52.6129 9.97326C55.4439 10.5335 57.3784 8.90141 60.0796 9.08411C61.0351 9.14501 62.0377 9.55914 62.1203 10.363C62.2382 11.5445 61.0941 12.6041 60.1504 12.9817C58.1805 13.7491 54.6418 13.3228 52.1883 13.7491C51.339 13.8952 50.3128 14.3094 50.4543 14.894C50.5487 15.2716 51.8344 15.4908 52.4242 15.5274C55.6916 15.771 58.0626 14.4921 60.5043 14.1267C61.33 14.0049 62.5449 13.944 63.0404 14.3824C62.5921 17.4883 60.1504 18.0243 57.1189 18.7794C53.8043 19.5955 49.7112 20.6064 45.6417 19.7417C44.0728 19.4006 43.2943 19.1936 43.601 17.1229C41.0885 18.682 36.4292 20.9353 31.8171 19.6686C29.6467 19.0718 27.6414 18.2557 27.6178 15.4665C27.3229 16.1485 27.0044 16.8063 26.627 17.5736C26.3321 18.1704 26.1197 19.1205 25.5771 19.5468C24.5037 20.3872 20.4342 20.3263 19.9624 19.0352C19.5259 17.8537 20.4224 15.369 20.7055 14.5773C21.4368 12.5189 22.4749 11.1669 21.9441 8.64563C21.4015 8.95013 21.0594 9.54696 20.6465 10.0463C18.2874 12.8843 16.0344 15.8806 12.6844 17.8172C11.151 18.7185 9.45239 19.7904 7.37634 19.7904C6.65681 19.7904 5.93727 19.7295 5.58339 19.2179C5.65417 18.341 6.43269 18.1826 6.75117 17.5614C5.52442 15.8319 4.52178 13.9318 3.70787 11.6906C3.31862 10.6553 2.78781 9.71748 2.96474 8.25587C3.27143 5.64934 5.71315 4.8211 7.90715 3.91977C9.07493 3.43257 10.0658 2.47035 11.2453 2.64087C11.67 3.89541 11.1746 5.16214 10.9387 6.4045C10.5494 8.41421 10.0422 10.5335 10.5022 12.9086C11.2689 12.5554 11.7172 11.8855 12.1654 11.1182C12.5311 10.497 13.2506 9.47388 13.3332 8.69435C13.4158 7.90265 12.9203 7.13531 13.1445 6.33142C13.4865 5.08906 16.1877 4.62622 17.4617 4.35826C18.83 4.07811 20.2101 3.93195 21.7199 4.10247C22.1328 4.1512 22.6872 4.40698 23.0175 4.35826C23.4185 4.30954 23.7724 3.70053 24.1852 3.46911C25.6479 2.62869 28.1014 3.27423 29.859 3.66399C31.0975 3.93195 32.3361 4.28518 33.5628 4.62622C32.9967 5.41792 32.2889 6.2218 31.6519 7.11095C31.015 7.98791 30.4606 8.91359 29.918 9.85146C31.416 8.28023 33.5157 6.70901 35.863 5.38138C38.8119 3.71271 42.7989 1.53248 46.9156 3.01845C46.8802 3.50565 46.7033 3.85887 46.6089 4.29736C46.6207 4.34608 46.5853 4.35826 46.5499 4.35826C47.0572 4.06593 47.6233 3.17679 48.4019 3.07935C54.2407 2.34855 60.693 4.32172 65.4467 5.0647Z" fill="white" />
              </svg>
            </a>

            <p className="text-xs lg:text-sm font-normal uppercase">
              VICE @ ART BASEL <br />
              MIAMI BEACH
            </p>
          </div>

          <div className="header-right text-right">
            <ul className="menu uppercase text-xs lg:text-sm" ref={menu}>
              {Menus.map((menuItem, index) => (
                <li
                  className={`${Menus.length - 1 !== index ? "mb-1" : ""}`}
                  key={index}
                >
                  <Link href={{ query: { section: menuItem.ref } }} className={`pt-1 pl-[2px] inline-block leading-5 hover:font-callEightNegativeOT  transition-all ${query.section && query.section == menuItem.ref ? "font-callEightNegativeOT " : ""}`}>
                    {menuItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
