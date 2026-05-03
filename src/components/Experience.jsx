import React, { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Experience.css";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  const headerRef = useScrollAnimation("fadeInUp");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experienceData = [
    {
      role: "Software Engineer",
      company: "Ceylon Crown Corporation (Pvt) Ltd.",
      location: "Sri Lanka",
      period: "Aug 2025 – Present",
      points: [
        "Frontend development using React.js and Next.js",
        "Independently delivered 4+ projects with responsive UI",
        "API integration and Git-based version control"
      ],
      icon: "💼"
    },
    {
      role: "Software Engineer",
      company: "360 Dominance (Pvt.) Ltd.",
      location: "Sri Lanka",
      period: "June 2025 – July 2025",
      points: [
        "Developing and maintaining modern web applications using React.js, Node.js, and MSSQL.",
        "Collaborating with UI/UX teams to improve responsiveness and user experience.",
        "Managing version control with GitHub and handling deployments in a collaborative environment."
      ],
      icon: "💻"
    },
    {
      role: "Software Engineer",
      company: "EonTech (Pvt.) Ltd.",
      location: "Sri Lanka",
      period: "March 2025 – June 2025",
      points: [
        "Contributed to a POS system and e-commerce platform (EZCart) using MERN stack and TypeScript.",
        "Engaged in testing APIs and resolving performance issues"
      ],
      icon: "🛒"
    },
    {
      role: "Software Engineer",
      company: "Thuli Software (Pvt.) Ltd.",
      location: "Sri Lanka",
      period: "September 2024 – March 2025",
      points: [
        "Developed scalable full-stack applications using the MERN stack and Java.",
        "Integrated RESTful APIs and collaborated with cross-functional teams for agile delivery.",
        "Supported backend logic, user authentication, and MongoDB performance tuning."
      ],
      icon: "🚀"
    },
    {
      role: "Software Engineer",
      company: "Thuli Software (Pvt.) Ltd.",
      location: "Sri Lanka",
      period: "March 2024 – September 2024",
      points: [
        "Worked on academic and client-based projects using Node.js, React.js, and MongoDB.",
        "Assisted in building CRUD operations and front-end components with responsive UI.",
        "Learned best practices in version control (Git) and participated in peer reviews."
      ],
      icon: "🌱"
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <h2>Work Experience</h2>
          <p className="section-subtitle">My professional journey and career history</p>
        </div>

        <div className="timeline-wrapper">
          {experienceData.map((exp, index) => (
            <div 
              className={`timeline-item ${isVisible ? "animate-in" : ""}`} 
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{exp.icon}</span>
              </div>
              <div className="timeline-content hover-effect" data-cursor="pointer">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company} <span className="timeline-location">- {exp.location}</span></h4>
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
