import gsap, { Power1 } from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const Modal = ({ url }) => {
  const [open, setOpen] = useState(false);
  const overlay = useRef(null);
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    gsap.set(".SlideModalBottom", { autoAlpha: 0, y: 50, scale: 0.5 });
    gsap.set(".modalOverlay", { autoAlpha: 0 });
  }, []);

  useEffect(() => {
    if (query.item) {
      const tl = new gsap.timeline();

      tl.to(
        ".modalOverlay",
        {
          autoAlpha: 1,
        },
        0.3
      );

      tl.to(
        ".SlideModalBottom",
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "back.out(1.7)",
        },
        0.5
      );

      setOpen(true);
    }
  }, [query.item]);

  const closeModal = () => {
    if (open) {
      setTimeout(() => {
        router.replace({ query: "" });
      }, 700);

      gsap.to(".SlideNavLeft", { x: 0, ease: Power1.easeInOut }, 0.5);

      gsap.to(".SlideNavRight", { x: 0, ease: Power1.easeInOut }, 0.5);

      const tl = new gsap.timeline();

      tl.to(
        ".SlideModalBottom",
        {
          autoAlpha: 0,
          y: 50,
          scale: 0.5,
          ease: Power1.easeInOut,
        },
        0.2
      );

      tl.to(
        ".modalOverlay",
        {
          autoAlpha: 0,
          ease: Power1.easeInOut,
        },
        0.3
      );
    }
  };

  return (
      <div
        className="modalOverlay fixed top-0 right-0 w-full h-full text-center z-10 cursor bg-black bg-opacity-70"
        id="modalOverlay1"
        ref={overlay}
        onClick={closeModal}
      >
        <div className="SlideModalBottomContainer flex items-center justify-center w-full h-full px-6 py-6">
          {}
          <div
            className="SlideModalBottom w-full h-full max-w-[900px] max-h-[900px]"
            style={{
              background: `no-repeat 60%/cover url(./assets/images/gallery/image-${
                query.item ? query.item : ""
              }.png)`,
            }}
          ></div>
        </div>
      </div>
    )
};

export default Modal;
