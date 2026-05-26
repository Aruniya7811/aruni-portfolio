import React, { useState, useEffect } from 'react';
import './App.css';
import aruniProfilePic from './aruni pic.jpeg'; // Your local passport photo

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const roles = ["MERN Stack Developer", "Python Developer", "React.js Developer", "IT Graduate / Fresher"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const openWhatsApp = () => {
    const phoneNumber = "919597581007"; //
    const message = encodeURIComponent("Hi Aruniya, I saw your professional fresher portfolio and would like to connect regarding an opportunity!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="fullscreen-hero animate-fade-in">
            {/* LEFT PROFILE CANVAS */}
            <div className="left-image-canvas">
              <div className="pure-organic-blob-wrapper">
                <div className="pure-blob-outline-ring"></div>
                <div className="pure-image-mask-frame">
                  <img src={aruniProfilePic} alt="Aruniya S Profile" className="profile-img-fit" />
                </div>
              </div>
            </div>

            {/* RIGHT TEXT CONTENT CANVAS */}
            <div className="right-text-canvas">
              <span className="welcome-tagline">AVAILABLE FOR ENTRY-LEVEL ROLES</span>
              <h1 className="main-heading">Hey I'm <span className="no-wrap-name">Aruniya S</span></h1> {/* */}

              <h2 className="title-role">
                I'm an <span className="typewriter-glow">{currentText}</span>
                <span className="cursor-pipe">|</span>
              </h2>

              <p className="clean-description">
                Highly motivated IT Graduate and Fresher with a Bachelor of Information Technology (Aggregate: 85.7%). Proficient in modern MERN stack engineering and Python automation. Equipped with strong logical problem-solving foundations and multiple industry certifications.
              </p>

              {/* Minimal Circle Icons */}
              <div className="minimal-social-row">
                <a href="https://github.com/Aruniya7811" target="_blank" rel="noreferrer" className="flat-circle-icon" title="GitHub"><i className="fa-brands fa-github"></i></a> {/* */}
                <a href="https://www.linkedin.com/in/aruniya-s-b4b391300" target="_blank" rel="noreferrer" className="flat-circle-icon" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a> {/* */}
                <a href="mailto:aruniya22369@gmail.com" className="flat-circle-icon" title="Email"><i className="fa-regular fa-envelope"></i></a> {/* */}
              </div>

              {/* Functional CTA Block */}
              <div className="action-button-deck">
                <button className="flat-hire-btn" onClick={openWhatsApp}>Hire Me Now! &rarr;</button>
                <a href="/Resume (7).pdf" download="Aruniya_Resume_Fresher.pdf" className="btn-link-reset"> {/* */}
                  <button className="flat-cv-btn">
                    <span className="btn-text-nowrap">Download Resume</span>
                    <i className="fa-solid fa-file-arrow-down icon-inline"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="panel-view animate-fade-in">
            <h2 className="page-heading">About Me</h2>
            <div className="glass-profile-box">
              <p className="about-summary">
                A passionate IT Graduate (2026 Batch) specializing in full-stack web architectures and software design logic. As an entry-level engineer, I combine my strong academic performance with self-learned technical competencies to build fast, structured cloud networks.
              </p>
              <div className="info-grid-deck">
                <div className="info-tile"><strong>Employment Status:</strong> <span className="fresher-status-tag">Fresher (Ready to Join)</span></div>
                <div className="info-tile"><strong>Primary Stack:</strong> <span>MERN Stack / Python</span></div>
                <div className="info-tile"><strong>Email:</strong> <span>aruniya22369@gmail.com</span></div>
                <div className="info-tile"><strong>Contact No:</strong> <span>+91 9597581007</span></div>
                <div className="info-tile"><strong>Location:</strong> <span>Virudhunagar, Tamil Nadu</span></div>
                <div className="info-tile"><strong>Languages:</strong> <span>Tamil, English</span></div>
              </div>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="panel-view animate-fade-in">
            <h2 className="page-heading">Education</h2>
            <div className="custom-timeline-deck">
              <div className="timeline-node">
                <div className="node-header">
                  <h4>Bachelor of Information Technology</h4>
                  <span className="years-badge">2023 - 2026</span>
                </div>
                <p className="college-name">Arulmigu Kalasalingam College of Arts and Science, Krishnankoil</p>
                <div className="score-tag">Academic Score: <strong>85.7% Aggregate</strong></div>
              </div>
              <div className="timeline-node">
                <div className="node-header">
                  <h4>Higher Secondary Education (HSC)</h4>
                  <span className="years-badge">2021 - 2023</span>
                </div>
                <p className="college-name">Government Higher Secondary School, Sundarapandiam</p>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="panel-view animate-fade-in">
            <h2 className="page-heading">Technical Skills</h2>
            <div className="skills-display-container">
              <div className="skills-category-group">
                <h5>Core Software Stack</h5>
                <div className="capsule-tags-wrapper">
                  <span>MERN Stack</span><span>React.js</span><span>Node.js</span>
                  <span>Express.js</span><span>MongoDB</span><span>Python Programming</span>
                </div>
              </div>
              <div className="skills-category-group">
                <h5>Frontend & Ecosystem</h5>
                <div className="capsule-tags-wrapper">
                  <span>HTML5 Mastery</span><span>CSS3 Styling</span><span>Modern JavaScript (ES6+)</span>
                  <span>Git & GitHub</span><span>VS Code IDE</span><span>Responsive Web Design</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="panel-view animate-fade-in">
            <h2 className="page-heading">Engineering Projects</h2>
            <div className="projects-layout-grid">
              <div className="project-matte-card">
                <div className="card-top-row">
                  <span className="tech-pill">MERN Stack + AI Cloud Engine</span>
                </div>
                <h3>AI Powered Background Removal SaaS</h3>
                <p>Designed and built a complete web ecosystem engineered to strip image background plates instantly with automated server pipelines and responsive dashboard viewports.</p>
              </div>
              <div className="project-matte-card">
                <div className="card-top-row">
                  <span className="tech-pill">HTML5, CSS3, JS Native</span>
                </div>
                <h3>Dynamic Portfolio Presentation</h3>
                <p>Engineered a high-performance personal developer showcase engine mapping clean modern asymmetric web templates using native web components.</p>
              </div>
            </div>
          </div>
        );
      case 'certifications':
        return (
          <div className="panel-view animate-fade-in">
            <h2 className="page-heading">Professional Credentials</h2>
            <div className="cert-split-layout">
              <div className="cert-column-list">
                <div className="cert-item-row"><i className="fa-solid fa-medal"></i> Oracle AI Foundations Associate</div>
                <div className="cert-item-row"><i className="fa-solid fa-medal"></i> Oracle Database Foundation (2024)</div>
                <div className="cert-item-row"><i className="fa-solid fa-circle-check"></i> MERN Stack Certified Developer</div>
              </div>
              <div className="cert-column-list">
                <div className="cert-item-row"><i className="fa-solid fa-circle-check"></i> Foundations of Coding with Python</div>
                <div className="cert-item-row"><i className="fa-solid fa-circle-nodes"></i> Java Spring Network Framework</div>
                <div className="cert-item-row"><i className="fa-solid fa-circle-nodes"></i> Spring 5 Basics with Spring Boot</div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="panel-view">Layout configuration error</div>;
    }
  };

  return (
    <div className="fullpage-layout-root">
      {/* Top Navbar - Now natively edge-to-edge full screen style */}
      <header className="top-seamless-navigation">
        <div className="brand-logo-text" onClick={() => setCurrentPage('home')}>Aruniya</div> {/* */}
        <nav className="middle-nav-links">
          <button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'nav-tab active' : 'nav-tab'}>Home</button>
          <button onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'nav-tab active' : 'nav-tab'}>About</button>
          <button onClick={() => setCurrentPage('education')} className={currentPage === 'education' ? 'nav-tab active' : 'nav-tab'}>Education</button>
          <button onClick={() => setCurrentPage('skills')} className={currentPage === 'skills' ? 'nav-tab active' : 'nav-tab'}>Skills</button>
          <button onClick={() => setCurrentPage('projects')} className={currentPage === 'projects' ? 'nav-tab active' : 'nav-tab'}>Projects</button>
          <button onClick={() => setCurrentPage('certifications')} className={currentPage === 'certifications' ? 'nav-tab active' : 'nav-tab'}>Certifications</button>
        </nav>
        <button className="pill-action-btn" onClick={openWhatsApp}>Let's chat <i className="fa-regular fa-comment-dots"></i></button>
      </header>

      {/* Main Container Full Screen Viewport */}
      <main className="fullscreen-main-viewport">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;