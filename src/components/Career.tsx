import "./styles/Career.css";

const careerData = [
  {
    type: "work",
    role: "Software Development Intern",
    company: "Crescent Infotech",
    location: "Bangalore, India",
    year: "Jun – Aug 2024",
    description: "Shipped 3+ production-ready ML prototypes in Python. Led end-to-end development covering CRUD operations, REST API integration, and database schema design. Collaborated with senior engineers in an Agile sprint cycle.",
    tags: ["Python", "Machine Learning", "REST APIs", "CRUD", "Agile"],
  },
  {
    type: "education",
    role: "B.E. Computer Science & Engineering",
    company: "Bethlahem Institute of Engineering",
    location: "Tamil Nadu, India",
    year: "2024 — Graduated",
    description: "Graduated with a 7.2 GPA. Built a strong foundation in algorithms, systems design, database engineering, and modern web architecture.",
    tags: ["Algorithms", "Systems Design", "Data Structures", "Networking"],
  },
  {
    type: "cert",
    role: "Cloud DevOps Fundamentals",
    company: "SLA / Softlogic Academy",
    location: "Chennai, Tamil Nadu",
    year: "2024",
    description: "Intensive certification covering cloud deployment, CI/CD pipeline design, AWS core services (EC2, S3, IAM, Lambda), and serverless architecture patterns.",
    tags: ["AWS", "CI/CD", "Docker", "Serverless", "IAM"],
  },
  {
    type: "cert",
    role: "Python Full-Stack Development",
    company: "E-MAX Institute",
    location: "Marthandam, Tamil Nadu",
    year: "2023",
    description: "Mastered full-stack web development with Python & Django, REST API design, and modern JavaScript frontend practices.",
    tags: ["Python", "Django", "REST API", "JavaScript", "PostgreSQL"],
  },
  {
    type: "cert",
    role: "Web & Interaction Design",
    company: "NOVI TECH / FEATHER",
    location: "Nagercoil, Tamil Nadu",
    year: "2023",
    description: "Gained expertise in mobile-first responsive design (HTML5, CSS3, JS ES6+) and UI/UX interaction prototyping from wire-framing to high-fidelity mockups.",
    tags: ["HTML5", "CSS3", "UI/UX", "Figma", "Responsive Design"],
  },
  {
    type: "cert",
    role: "Data Science using Python",
    company: "VEI Technologies",
    location: "Chennai, Tamil Nadu",
    year: "2023",
    description: "Built practical ML and data engineering skills — covering data wrangling, predictive modeling, and ETL pipeline development for data-driven applications.",
    tags: ["Pandas", "scikit-learn", "ETL", "Data Visualization"],
  },
];

const typeLabel: Record<string, string> = {
  work: "Work",
  education: "Education",
  cert: "Certification",
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Career <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerData.map((item, index) => (
            <div className="career-info-box" key={index}>
              {/* Dot on the line — absolutely positioned at left:50% */}
              <div className="career-entry-dot"></div>

              {/* LEFT column */}
              <div className="career-info-in">
                <span className={`career-type-badge career-type-${item.type}`}>
                  {typeLabel[item.type]}
                </span>
                <h4>{item.role}</h4>
                <h5>{item.company}</h5>
                <span className="career-location">{item.location}</span>
              </div>

              {/* Center dot handled by CSS ::before on career-info-box */}

              {/* RIGHT column */}
              <div className="career-right">
                <h3>{item.year}</h3>
                <p>{item.description}</p>
                <div className="career-tags">
                  {item.tags.map((tag, i) => (
                    <span className="career-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
