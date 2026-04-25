import React from 'react';
import './PageStyles.css';

function About() {
  return (
    <div className="page-container">
      <div className="page-card">
        <h1 className="page-title">About This Application</h1>
        <div className="page-content">
          <p className="page-intro">
            This is a modern React application demonstrating best practices for building
            scalable, performant web applications.
          </p>

          <h2>Project Overview</h2>
          <p>
            This application showcases the implementation of:
          </p>
          <ul className="feature-list">
            <li>
              <span className="feature-icon">📚</span>
              <strong>React Router DOM:</strong> Powerful routing library for single-page applications
            </li>
            <li>
              <span className="feature-icon">⏱️</span>
              <strong>Code Splitting:</strong> Reduce bundle size by splitting code into smaller chunks
            </li>
            <li>
              <span className="feature-icon">🎯</span>
              <strong>Performance Optimization:</strong> Lazy load components for faster initial load
            </li>
            <li>
              <span className="feature-icon">🎨</span>
              <strong>Modern UI:</strong> Clean and responsive user interface
            </li>
          </ul>

          <h2>Benefits of Lazy Loading</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Faster Initial Load</h3>
              <p>Smaller initial bundle size means faster page loads</p>
            </div>
            <div className="benefit-card">
              <h3>Better Performance</h3>
              <p>Resources are loaded only when needed</p>
            </div>
            <div className="benefit-card">
              <h3>Improved UX</h3>
              <p>Progressive loading with visual feedback</p>
            </div>
          </div>

          <h2>Technology Stack</h2>
          <ul className="tech-list">
            <li>React 18+ - JavaScript library for UI</li>
            <li>React Router DOM 6+ - Client-side routing</li>
            <li>React.lazy() - Code splitting</li>
            <li>Suspense - Async component loading</li>
            <li>CSS3 - Styling and animations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
