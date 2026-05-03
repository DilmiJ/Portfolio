import React, { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Certificates.css";

const Certificates = () => {
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

  const certificatesData = [
    {
      title: "Python for Beginners",
      description: "Foundations of Python programming, including syntax, data structures, and basic scripting.",
      file: "/Certificate/Python_for_Beginners_E-Certificate.pdf_Dilmi_jayaanetthi.pdf",
      icon: "🐍"
    },
    {
      title: "Selenium in C# - Test Automation",
      description: "Automated software testing concepts, writing robust test scripts using Selenium and C#.",
      file: "/Certificate/UC-d43fd2b4-4d88-4bea-ad1e-4d24b2d79e02.pdf",
      icon: "⚙️"
    },
    {
      title: "Java Programming Fundamentals",
      description: "Core Java concepts, object-oriented programming, and fundamental software design.",
      file: "/Certificate/UC-df19da55-b6e4-4009-9531-e14fe6e98fc9.pdf",
      icon: "☕"
    },
    {
      title: "Python & Flask Course",
      description: "Web application development using Python and the Flask framework to build scalable APIs.",
      file: "/Certificate/UC-39dd6aff-e147-4f6a-8cc6-4d09a341206f.pdf",
      icon: "🌐"
    },
    {
      title: "Ethical Hacking Course",
      description: "Cybersecurity principles, vulnerability assessment, and securing applications against attacks.",
      file: "/Certificate/UC-7168450d-3d85-41cb-b98b-e50bc1fed6c5.pdf",
      icon: "🛡️"
    },
    {
      title: "Deep Web Introduction",
      description: "Understanding internet layers, anonymity, Tor networks, and deep web navigation.",
      file: "/Certificate/UC-d36a728d-5264-427c-a5d6-93e9bf5bf505.pdf",
      icon: "🕸️"
    }
  ];

  return (
    <section id="certificates" className="certificates-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <h2>My Certificates</h2>
          <p className="section-subtitle">Professional courses and certifications I have completed to enhance my technical and practical skills.</p>
        </div>

        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <div 
              className={`certificate-card ${isVisible ? "animate-in" : ""}`} 
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="cert-header">
                <span className="cert-icon">{cert.icon}</span>
                <h3>{cert.title}</h3>
              </div>
              
              <div className="cert-body">
                <p>{cert.description}</p>
              </div>
              
              <div className="cert-footer">
                <a 
                  href={cert.file} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Certificate <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
