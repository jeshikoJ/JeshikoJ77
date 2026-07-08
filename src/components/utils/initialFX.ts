import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother) {
    smoother.paused(false);
  }
  const mainElement = document.getElementsByTagName("main")[0];
  if (mainElement) {
    mainElement.classList.add("main-active");
  }
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);
  var landingText6 = new SplitText(".landing-h2-info-2", TextProps);
  var landingText7 = new SplitText(".landing-h2-3", TextProps);

  // Hide the inactive segments initially
  gsap.set([landingText3.chars, landingText5.chars, landingText6.chars, landingText7.chars], {
    opacity: 0,
    y: 80,
  });

  LoopThreeTexts(landingText4, landingText5, landingText7);
  LoopThreeTexts(landingText2, landingText3, landingText6);
}

function LoopThreeTexts(Text1: SplitText, Text2: SplitText, Text3: SplitText) {
  var tl = gsap.timeline({ repeat: -1 });
  const displayDuration = 3;
  const animDuration = 1.0;

  // State 1 to State 2
  tl.to(Text1.chars, {
    y: -80,
    opacity: 0,
    duration: animDuration,
    ease: "power3.inOut",
    stagger: 0.05,
  }, displayDuration)
    .fromTo(Text2.chars,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.inOut",
        stagger: 0.05,
      },
      displayDuration
    );

  // State 2 to State 3
  const time2 = displayDuration * 2 + animDuration;
  tl.to(Text2.chars, {
    y: -80,
    opacity: 0,
    duration: animDuration,
    ease: "power3.inOut",
    stagger: 0.05,
  }, time2)
    .fromTo(Text3.chars,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.inOut",
        stagger: 0.05,
      },
      time2
    );

  // State 3 to State 1
  const time3 = displayDuration * 3 + animDuration * 2;
  tl.to(Text3.chars, {
    y: -80,
    opacity: 0,
    duration: animDuration,
    ease: "power3.inOut",
    stagger: 0.05,
  }, time3)
    .fromTo(Text1.chars,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.inOut",
        stagger: 0.05,
      },
      time3
    );
}
