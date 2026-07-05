import "./styles/Career.css";

const careerData = [
  {
    role: "Software Development Intern",
    company: "Crescent Infotech (Bangalore, India)",
    year: "Jun-Aug 2024",
    description: "Developed & deployed 3+ production-ready software prototypes using Python & machine learning. Executed end-to-end development workflows including CRUD operations, REST API integration, & database schema design.",
  },
  {
    role: "B.E. Computer Science & Engineering",
    company: "Bethlahem Institute of Engineering",
    year: "Graduated",
    description: "GPA: 7.2/10. Gained a solid foundation in algorithms, systems engineering, databases, and modern web architecture.",
  },
  {
    role: "Cloud DevOps Fundamentals",
    company: "SLA / Softlogic Academy",
    year: "2024",
    description: "Comprehensive training in cloud deployment, CI/CD pipeline implementation, AWS services (EC2, S3, IAM), and serverless architecture.",
  },
  {
    role: "Python Full Stack Development",
    company: "E-MAX",
    year: "2023",
    description: "Mastered full-stack web development workflows using Python, Django, REST API development, and modern JavaScript frontend design.",
  },
  {
    role: "Web & Interaction Design",
    company: "NOVI TECH / FEATHER",
    year: "2023",
    description: "Gained expertise in mobile-first responsive web design (HTML5, CSS3, JavaScript ES6+) and UI/UX interaction prototyping.",
  },
  {
    role: "Data Science using Python",
    company: "VEI Technologies",
    year: "2023",
    description: "Learned machine learning and data engineering fundamentals, building practical problem-solving skills for data-driven applications.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerData.map((item, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
