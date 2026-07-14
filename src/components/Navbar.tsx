import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

import { useLoading } from "../context/LoadingProvider";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const { isLoading } = useLoading();

  useEffect(() => {
    if (window.innerWidth > 1024) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 0.8,
        effects: true,
        autoResize: true,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      smoother.scrollTop(0);
      smoother.paused(isLoading);
    }

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024 && smoother) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      if (ScrollSmoother.get()) {
        ScrollSmoother.refresh(true);
      }
    });
  }, []);

  useEffect(() => {
    if (smoother) {
      smoother.paused(isLoading);
    }
  }, [isLoading]);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          JJ
        </a>
        <a
          href="mailto:chandranjeshiko@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          chandranjeshiko@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
