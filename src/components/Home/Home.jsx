import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  // Stats data
  const stats = [
    { label: 'Projects Completed', value: 15, suffix: '+' },
    { label: 'Happy Clients', value: 5, suffix: '+' },
    { label: 'Years Experience', value: 2, suffix: '+' },
    { label: 'Team Members', value: 3, suffix: '' }
  ];

  // Counter animation hook
  const useCounter = (end, duration = 2000, isVisible = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime = null;
      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, [end, duration, isVisible]);

    return count;
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const CounterCard = ({ stat, index }) => {
    const count = useCounter(stat.value, 2000 + (index * 200), isVisible);
    
    return (
      <div className={`counter-card ${isVisible ? 'animate' : ''}`} 
           style={{ animationDelay: `${index * 0.2}s` }}>
        <div className="counter-number">
          {count}{stat.suffix}
        </div>
        <div className="counter-label">
          {stat.label}
        </div>
      </div>
    );
  };

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1>COMPLETE DIGITAL SOLUTIONS FOR MODERN BUSINESSES</h1>
        <h5>From custom websites and software to e-commerce, cloud solutions, and branding, <br />we provide everything your business needs to thrive online. Partner with us to elevate <br />your digital presence and drive growth.</h5>
        <button className='getstart'>Get Started</button>
      </div>
<br /><br />
      <div className="stats-section" ref={counterRef}>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <CounterCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;