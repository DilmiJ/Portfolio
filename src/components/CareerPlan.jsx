import React, { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./CareerPlan.css";

const CareerPlan = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineItems = [
    {
      title: "Short-Term Goals (0 – 1 Year)",
      items: [
        "Improving my proficiency in HTML, CSS, and JavaScript",
        "Gaining deeper knowledge of React and modern frontend frameworks",
        "Building and deploying personal projects such as portfolio websites and small web applications",
        "Learning version control systems like Git and GitHub",
        "Completing online certifications related to frontend development",
        "Improving problem-solving and debugging skills"
      ],
      icon: "🌱"
    },
    {
      title: "Medium-Term Goals (1 – 3 Years)",
      items: [
        "Securing an internship or entry-level position as a frontend developer",
        "Working on real-world projects and collaborating with development teams",
        "Learning advanced tools such as TypeScript, Next.js, and state management libraries",
        "Enhancing UI/UX design skills to create better user experiences",
        "Building a strong professional portfolio with multiple high-quality projects"
      ],
      icon: "🚀"
    },
    {
      title: "Long-Term Goals (3 – 5 Years)",
      items: [
        "Becoming a senior frontend developer or full-stack developer",
        "Contributing to large-scale, real-world applications",
        "Learning backend technologies such as Node.js and databases",
        "Taking leadership roles in development teams",
        "Continuously learning new technologies to stay updated with industry trends"
      ],
      icon: "🌟"
    }
  ];

  return (
    <section id="career" className="career-plan" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <h2>Career Development Plan</h2>
          <p className="section-subtitle">My journey and future goals</p>
        </div>

        <div className="career-content">
          <div className={`career-intro ${isVisible ? "animate-in" : ""}`}>
            <h3>Career Goal</h3>
            <p>
              My primary career goal is to become a professional Frontend Developer who is capable of building modern, responsive, and user-friendly web applications. I am particularly interested in working with technologies such as React, JavaScript, and UI/UX design to create engaging digital experiences.
            </p>
          </div>

          <div className="timeline-container">
            {timelineItems.map((period, index) => (
              <div 
                className={`timeline-card ${isVisible ? "animate-in" : ""}`} 
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-header">
                  <span className="card-icon">{period.icon}</span>
                  <h4>{period.title}</h4>
                </div>
                <ul className="goal-list">
                  {period.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`skills-action-grid ${isVisible ? "animate-in" : ""}`} style={{ animationDelay: "0.6s" }}>
            <div className="plan-card">
              <h4>Skills Development Plan</h4>
              <div className="skills-split">
                <div className="skill-category">
                  <h5>Technical Skills</h5>
                  <ul>
                    <li>React.js and modern JavaScript (ES6+)</li>
                    <li>Responsive web design (CSS, Flexbox, Grid)</li>
                    <li>Version control (Git, GitHub)</li>
                    <li>UI/UX principles</li>
                    <li>API integration and web services</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h5>Soft Skills</h5>
                  <ul>
                    <li>Communication and teamwork</li>
                    <li>Time management</li>
                    <li>Problem-solving and critical thinking</li>
                    <li>Adaptability and continuous learning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="plan-card">
              <h4>Action Plan</h4>
              <ul className="action-list">
                <li>Practice coding daily and work on real projects</li>
                <li>Follow online tutorials and courses (e.g., Coursera, Udemy)</li>
                <li>Participate in coding challenges and hackathons</li>
                <li>Seek feedback from peers and mentors</li>
                <li>Regularly update my portfolio with new projects</li>
              </ul>
              <div className="conclusion">
                <p>
                  <strong>Conclusion:</strong> This career development plan provides a clear roadmap for achieving my goal of becoming a successful frontend developer. By continuously improving my technical and soft skills, gaining practical experience, and staying committed to learning, I am confident that I can achieve my career objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPlan;
