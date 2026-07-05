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
      title: "BiteFlow Ordering Engine",
      category: "Full-Stack Web Development",
      tools: "Node.js, Express.js, Supabase, PostgreSQL, Stripe integration, Vercel",
      image: `${import.meta.env.BASE_URL}images/project_restaurant.jpg`,
      link: "https://github.com/jeshikoJ"
    },
    {
      title: "NovaCart Headless Commerce",
      category: "Full-Stack Web Development",
      tools: "Python, Django, MongoDB, AWS EC2/S3, Responsive Design",
      image: `${import.meta.env.BASE_URL}images/project_ecommerce.jpg`,
      link: "https://github.com/jeshikoJ"
    },
    {
      title: "SynapseML Predictive Hub",
      category: "AI/ML & Data Engineering",
      tools: "Python, scikit-learn, pandas, Automated ETL Pipelines",
      image: `${import.meta.env.BASE_URL}images/project_ml.jpg`,
      link: "https://github.com/jeshikoJ"
    },
    {
      title: "Aether3D Creative Portfolio",
      category: "Creative Development",
      tools: "React, Vite, Three.js, WebGL Shaders, GSAP, CSS Grid",
      image: `${import.meta.env.BASE_URL}images/project_portfolio.jpg`,
      link: "https://github.com/jeshikoJ"
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
                <h4>Tools & Tech Stack</h4>
                <div className="work-tags-container">
                  {project.tools.split(", ").map((tool, i) => (
                    <span className="work-tag" key={i}>{tool}</span>
                  ))}
                </div>
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
