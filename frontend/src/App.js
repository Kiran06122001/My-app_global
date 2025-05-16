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
              <div className="logo-icon">C</div>
              <span className="logo-text">Claude</span>
            </a>
            <div className="nav-links">
              <a href="https://anthropic.com/claude/" className="nav-link">Features</a>
              <a href="https://anthropic.com/pricing/" className="nav-link">Pricing</a>
              <a href="https://docs.anthropic.com/" className="nav-link">Docs</a>
              <a href="https://console.anthropic.com/" className="btn">Get Started</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Build Intelligent Apps with Claude</h1>
          <p className="hero-description">
            The next generation AI assistant that helps you create, explore, and build amazing things.
          </p>
          <div className="hero-buttons">
            <a href="https://console.anthropic.com/" className="btn">Get Started</a>
            <a href="https://docs.anthropic.com/" className="btn btn-outline">View Documentation</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3 className="feature-title">Natural Conversations</h3>
              <p className="feature-description">Engage in fluid, contextual dialogues that feel natural and human-like.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3 className="feature-title">Developer Friendly</h3>
              <p className="feature-description">Integrate Claude into your applications with our simple and powerful API.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">Endless Possibilities</h3>
              <p className="feature-description">From content creation to data analysis, Claude can help with a wide range of tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="demo">
        <div className="container">
          <div className="demo-container">
            <div className="demo-content">
              <h2 className="demo-title">See Claude in Action</h2>
              <p className="demo-description">Watch how Claude can transform your workflow and help you accomplish tasks more efficiently.</p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn">Watch Demo</a>
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
                <div className="logo-icon">C</div>
                <span className="logo-text">Claude</span>
              </div>
              <p className="copyright">© 2025 Anthropic, Inc. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <a href="https://anthropic.com/terms/" className="footer-link">Terms</a>
              <a href="https://anthropic.com/privacy/" className="footer-link">Privacy</a>
              <a href="https://anthropic.com/contact/" className="footer-link">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;