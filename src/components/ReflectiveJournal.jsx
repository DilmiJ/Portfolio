import React, { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./ReflectiveJournal.css";

const ReflectiveJournal = () => {
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

  const learnings = [
    {
      title: "Business and Social Etiquette",
      description: "Understood how to behave professionally, respect others, maintain proper conduct, and build positive workplace relationships.",
      icon: "🤝"
    },
    {
      title: "Personal Grooming",
      description: "Realized the importance of professional appearance and self-confidence. First impressions play a significant role in career opportunities.",
      icon: "👔"
    },
    {
      title: "Business Communication",
      description: "Learned essential skills: business terminology, presentations, CV preparation, and proposal writing. Creating my CV prepared me for job applications.",
      icon: "📝"
    },
    {
      title: "Corporate Interview Skills",
      description: "Understood how to face interviews with confidence, answer effectively, present professionally, and manage nervousness.",
      icon: "🎯"
    },
    {
      title: "Conducting Meetings",
      description: "Gained insights on organizing meetings, communicating ideas within a team, and the importance of teamwork and leadership.",
      icon: "📊"
    },
    {
      title: "Negotiation & Conflict Resolution",
      description: "Learned to handle disagreements professionally and find solutions through communication and understanding.",
      icon: "⚖️"
    }
  ];

  return (
    <section id="journal" className="reflective-journal" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <h2>Reflective Journal</h2>
          <p className="section-subtitle">PPW Module (Professional and Personal Development)</p>
        </div>

        <div className="journal-content">
          <div className={`journal-intro ${isVisible ? "animate-in" : ""}`}>
            <p>
              Throughout the PPW module, I gained valuable knowledge and skills that contribute to both my academic and professional growth. This module covered several important areas crucial for my career readiness.
            </p>
          </div>

          <div className="learnings-grid">
            {learnings.map((item, index) => (
              <div 
                className={`learning-card ${isVisible ? "animate-in" : ""}`} 
                key={index}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="learning-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="reflection-split">
            <div 
              className={`reflection-card challenges ${isVisible ? "animate-in" : ""}`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="reflection-header">
                <span className="reflection-icon">🧗‍♀️</span>
                <h3>Challenges Faced</h3>
              </div>
              <p>
                During this module, one of the main challenges I faced was improving my confidence in communication and presentations. Initially, I found it difficult to express my ideas clearly in front of others. Additionally, preparing professional documents like CVs and proposals required attention to detail and proper formatting.
              </p>
            </div>

            <div 
              className={`reflection-card outcomes ${isVisible ? "animate-in" : ""}`}
              style={{ animationDelay: "1s" }}
            >
              <div className="reflection-header">
                <span className="reflection-icon">📈</span>
                <h3>Improvements & Outcomes</h3>
              </div>
              <p>
                Over time, I improved my communication and presentation skills through practice and feedback. I became more confident in expressing my ideas and interacting with others. I also developed a better understanding of professional behavior, teamwork, and workplace expectations.
              </p>
            </div>
          </div>

          <div 
            className={`journal-conclusion ${isVisible ? "animate-in" : ""}`}
            style={{ animationDelay: "1.2s" }}
          >
            <p>
              <strong>Overall:</strong> The PPW module helped me build essential soft skills that are important for my future career. It has prepared me to face real-world professional situations with confidence and professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReflectiveJournal;
