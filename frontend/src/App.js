import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="/" className="logo">
              <div className="logo-icon">A</div>
              <span className="logo-text">AppName</span>
            </a>
            <div className="nav-links">
              <a href="/features" className="nav-link">Features</a>
              <a href="/pricing" className="nav-link">Pricing</a>
              <a href="/docs" className="nav-link">Docs</a>
              <a href="/signup" className="btn">Get Started</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Build Amazing Apps with AppName</h1>
          <p className="hero-description">
            The next generation platform that helps you create, explore, and build amazing things.
          </p>
          <div className="hero-buttons">
            <a href="/signup" className="btn">Get Started</a>
            <a href="/docs" className="btn btn-outline">View Documentation</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3 className="feature-title">User-Friendly Interface</h3>
              <p className="feature-description">Enjoy a clean, intuitive interface designed for maximum productivity and ease of use.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3 className="feature-title">Developer Tools</h3>
              <p className="feature-description">Access powerful developer tools with our simple and comprehensive API.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">Endless Possibilities</h3>
              <p className="feature-description">From content creation to data analysis, our platform supports a wide range of applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="demo">
        <div className="container">
          <div className="demo-container">
            <div className="demo-content">
              <h2 className="demo-title">See It In Action</h2>
              <p className="demo-description">Watch how our platform can transform your workflow and help you accomplish tasks more efficiently.</p>
              <a href="/demo" className="btn">Watch Demo</a>
            </div>
            <div className="demo-video">
              <span>Demo Video</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-logo">
                <div className="logo-icon">A</div>
                <span className="logo-text">AppName</span>
              </div>
              <p className="copyright">© 2025 Your Company, Inc. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <a href="/terms" className="footer-link">Terms</a>
              <a href="/privacy" className="footer-link">Privacy</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;