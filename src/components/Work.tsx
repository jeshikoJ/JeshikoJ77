import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    if (window.innerWidth > 1024) {
      let translateX: number = 0;

      function setTranslateX() {
        const box = document.getElementsByClassName("work-box");
        const rectLeft = document
          .querySelector(".work-container")!
          .getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        let padding: number =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      setTranslateX();

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`, // Use actual scroll width
          scrub: true,
          pin: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });

      // Clean up (optional, good practice)
      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    }
  }, []);
  const projects = [
    {
      title: "Restaurant Ordering Platform",
      category: "Full-Stack Web Development",
      tools: "Node.js, Express.js, Supabase, PostgreSQL, Vercel",
      image: "/images/project_ecommerce.jpg",
      link: "https://github.com/JeshikoJ"
    },
    {
      title: "E-Commerce Web Application",
      category: "Full-Stack Web Development",
      tools: "Python, Django, MongoDB, AWS EC2, HTML5/CSS3",
      image: "/images/project_ecommerce.jpg",
      link: "https://github.com/JeshikoJ"
    },
    {
      title: "Machine Learning Prototypes",
      category: "AI/ML & Data Engineering",
      tools: "Python, scikit-learn, pandas, Data Processing",
      image: "/images/project_ml.jpg",
      link: "https://github.com/JeshikoJ"
    },
    {
      title: "Modern 3D Portfolio",
      category: "Creative Development",
      tools: "React, Vite, Three.js, GSAP, Tailwind CSS",
      image: "/images/project_portfolio.jpg",
      link: "https://github.com/JeshikoJ"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
