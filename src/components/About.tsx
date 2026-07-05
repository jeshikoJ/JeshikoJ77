import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-image-container">
          <img src="/images/jeshiko.png" className="about-image" alt="Jeshiko J" />
        </div>
        <p className="para">
          Full-Stack Web Developer with demonstrated expertise in building production-ready, scalable web applications using JavaScript, Node.js, React, Python, Django, HTML5, CSS3, MongoDB, and PostgreSQL. Proficient in serverless architecture, REST API development, responsive web design, cloud deployment, and CI/CD pipeline implementation. Seeking full-stack development or DevOps engineering roles to contribute to high-performance engineering teams.
        </p>
      </div>
    </div>
  );
};

export default About;
