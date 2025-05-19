import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loading-screen">
          <div className="mask-container">
            <img src="/images/svgwaves_io_svg (1) 1.png" alt="Black Panther Mask" className="mask-loading" />
          </div>
          <p className="loading-text">WAKANDA FOREVER</p>
        </div>
      ) : (
        <div className="landing-container">
          <header className="hero-section">
            <div className="hero-content">
              <div className="logo-container">
                <img src="/images/svgwaves_io_svg 1.svg" alt="Black Panther" className="hero-logo" />
              </div>
              <h1 className="hero-title">WAKANDA TECH</h1>
              <p className="hero-subtitle">Advanced Technology For A Better Tomorrow</p>
              <div className="cta-container">
                <button className="cta-button primary">EXPLORE</button>
                <button className="cta-button secondary">JOIN US</button>
              </div>
            </div>
            <div className="hero-background">
              {/* <img src="/images/svgwaves_io_svg 1.svg" alt="" className="wave-bg" /> */}
            </div>
          </header>
          
          <section className="features-section">
            <h2 className="section-title">VIBRANIUM POWERED</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="feature-symbol">⚡</i>
                </div>
                <h3 className="feature-title">Advanced Energy</h3>
                <p className="feature-description">Sustainable power sources inspired by Wakandan technology</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="feature-symbol">🛡️</i>
                </div>
                <h3 className="feature-title">Ultimate Protection</h3>
                <p className="feature-description">Defense systems with vibranium-inspired resilience</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="feature-symbol">🧪</i>
                </div>
                <h3 className="feature-title">Medical Innovations</h3>
                <p className="feature-description">Healing technology beyond conventional medicine</p>
              </div>
            </div>
          </section>
          
          <section className="about-section">
            <div className="about-image-container">
              <div className="about-image-overlay"></div>
              <img src="/images/BP.jpg" alt="Wakanda Technology" className="about-image" />
            </div>
            <div className="about-content">
              <h2 className="section-title">THE LEGACY</h2>
              <p className="about-text">
                Inspired by the technological marvels of Wakanda, our mission is to bring 
                advanced, sustainable technology to the world while honoring the principles 
                of protection, innovation, and community.
              </p>
              <button className="cta-button secondary">LEARN MORE</button>
            </div>
          </section>
          
          <footer className="footer">
            <div className="footer-waves">
              {/* <img src="/images/svgwaves_io_svg (3) 1.svg" alt="" className="footer-wave" /> */}
            </div>
            <div className="footer-content">
              <div className="footer-logo">
                <img src="/images/BP.jpg" alt="Black Panther Logo" className="footer-logo-img" />
                <p className="footer-logo-text">WAKANDA TECH</p>
              </div>
              <div className="footer-links">
                <ul className="footer-menu">
                  <li className="footer-menu-item"><a href="#home">Home</a></li>
                  <li className="footer-menu-item"><a href="#about">About</a></li>
                  <li className="footer-menu-item"><a href="#technology">Technology</a></li>
                  <li className="footer-menu-item"><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-newsletter">
                <h3 className="footer-heading">Join Our Tribe</h3>
                <div className="footer-form">
                  <input type="email" placeholder="Your email" className="footer-input" />
                  <button className="footer-button">SUBMIT</button>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="copyright">© 2025 Wakanda Tech. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;