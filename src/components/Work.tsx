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
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });

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
      description: "A real-time restaurant ordering platform with live order tracking, Stripe payments, and a multi-tenant dashboard for restaurant owners.",
      tools: "Node.js, Express.js, Supabase, PostgreSQL, Stripe, Vercel",
      image: `${import.meta.env.BASE_URL}images/project_restaurant.jpg`,
      link: "https://github.com/jeshikoJ",
    },
    {
      title: "NovaCart Headless Commerce",
      category: "Full-Stack Web Development",
      description: "A headless e-commerce platform with AWS-hosted microservices, serverless APIs, and a fully responsive storefront.",
      tools: "Python, Django, MongoDB, AWS EC2, AWS S3, REST API",
      image: `${import.meta.env.BASE_URL}images/project_ecommerce.jpg`,
      link: "https://github.com/jeshikoJ",
    },
    {
      title: "SynapseML Predictive Hub",
      category: "AI / ML & Data Engineering",
      description: "An end-to-end ML pipeline for predictive analytics — including data wrangling, model training, and automated ETL jobs.",
      tools: "Python, scikit-learn, pandas, NumPy, Matplotlib, ETL Pipelines",
      image: `${import.meta.env.BASE_URL}images/project_ml.jpg`,
      link: "https://github.com/jeshikoJ",
    },
    {
      title: "Aether3D Creative Portfolio",
      category: "Creative Development",
      description: "An immersive 3D portfolio built with WebGL shaders, GSAP scroll animations, and a rigged 3D character — all rendered in real time.",
      tools: "React, Vite, Three.js, WebGL, GSAP, CSS Grid",
      image: `${import.meta.env.BASE_URL}images/project_portfolio.jpg`,
      link: "https://jeshikoj.github.io/JeshikoJ77/",
    },
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
                    <span className="work-category-badge">{project.category}</span>
                    <h4>{project.title}</h4>
                  </div>
                </div>
                <p className="work-desc">{project.description}</p>
                <span className="work-stack-label">Tech Stack</span>
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
