import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Menus } from "~/constants";

const MobileMenu = () => {
  const router = useRouter();

  useEffect(() => {
    const anchorNodes = document.querySelectorAll('a[href^="#"]');
    anchorNodes.forEach((el) => {
      el.addEventListener("click", () => {
        const checkbox = document.querySelector(".checkbox-toggle");
        checkbox.checked = false;
      });
    });
  }, []);

  const clickHandler = (selector) => {
    router.push({query: {section: selector}});
  }

  return (
    <>
      <div className="outer-menu absolute w-full top-0">
        <input
          aria-labelledby="menu"
          className="fixed bottom-14 right-14 checkbox-toggle link w-10 h-10 opacity-0"
          type="checkbox"
          aria-label="menu"
        />

        <div className="fixed z-10 bottom-[3.7rem] right-[3.7rem] hamburger w-6 h-6 flex items-center justify-center">
          <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
        </div>

        <div className="fixed bottom-10 right-10 w-16 h-16 bg-white bg-opacity-70 rounded-full shadow-2xl">
        </div>

        <div className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center">
          <div className="flex-none overflow-hidden flex items-center justify-center">
            <div className="text-center opacity-0 overflow-y-auto overflow-x-hidden flex flex-none justify-center items-center max-h-screen">
              <ul className="list-none py-4 px-0 m-0 block max-h-screen">
              <li className="font-neue p-0 m-6 text-2xl block">
                    <a
                      className="link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline"
                      href="#"
                      onClick={(e)=> {e.preventDefault(); clickHandler('home');}}
                    >
                      Home
                    </a>
                  </li>

                {Menus.map((el) => (
                  <li className="font-neue p-0 m-6 text-2xl block" key={el.name}>
                    <a
                      className="link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline"
                      href="#"
                      onClick={(e)=> {e.preventDefault(); clickHandler(el.ref);}}
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
