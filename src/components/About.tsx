import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3>About Me</h3>
        <div className="about-image-container">
          <img src={`${import.meta.env.BASE_URL}images/jeshiko.png`} className="about-image" alt="Jeshiko J" />
        </div>
        <p>
          <strong>Full-Stack Engineer</strong> with a passion for crafting production-grade, scalable web applications.
          Experienced across the entire stack — from <strong>React & Node.js</strong> frontends to <strong>Django & PostgreSQL</strong> backends,
          cloud deployment on <strong>AWS</strong>, and automated CI/CD pipelines. I build software that performs at scale.
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-number">3+</span>
            <span className="about-stat-label">Prod Apps</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">6+</span>
            <span className="about-stat-label">Certifications</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">10+</span>
            <span className="about-stat-label">Technologies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
