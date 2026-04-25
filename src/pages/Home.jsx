import React from 'react';
import './PageStyles.css';

function Home() {
  return (
    <div className="page-container">
      <div className="page-card">
        <h1 className="page-title">Welcome to Home Page</h1>
        <div className="page-content">
          <p className="page-intro">
            This page demonstrates lazy loading with React Router and Suspense. Each page is loaded
            only when needed, improving the initial load time of your application.
          </p>

          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>
              <span className="feature-icon">⚡</span>
              <strong>Lazy Loading:</strong> Components are loaded on-demand using React.lazy()
            </li>
            <li>
              <span className="feature-icon">🔄</span>
              <strong>Suspense:</strong> Fallback UI displayed while components are loading
            </li>
            <li>
              <span className="feature-icon">🧭</span>
              <strong>React Router:</strong> Client-side routing without page reloads
            </li>
            <li>
              <span className="feature-icon">📱</span>
              <strong>Responsive Design:</strong> Works great on all device sizes
            </li>
          </ul>

          <h2>How It Works</h2>
          <div className="code-block">
            <pre>
{`// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Use Suspense for fallback
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Suspense>`}
            </pre>
          </div>

          <div className="navigation-hint">
            <p>👉 Navigate to <strong>About</strong> or <strong>Contact</strong> pages using the menu above!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
