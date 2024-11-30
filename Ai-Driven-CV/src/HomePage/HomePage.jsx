import React, { useEffect, useRef, useState } from 'react';
import style from './HomePage.module.css'; // Import the CSS module

function HomePage() {
 
  const [state, setState] = useState({ shower: 1, mode: 0 });
  const showing = useRef();
  useEffect(() => {
  
    setTimeout(() => {
        showing.current.classList.toggle(`${style.loaded}`);
   
      }, 0);

     setInterval(() => {
        setState((prev) => {
          prev.shower==0?prev.shower=1:prev.shower=0;           console.log(prev);
          p.mode==0?p.mode=1:p.mode=0; 
          return prev; 
        });
      }, 300);
  }, []);



  return (
    <div className={`${style.hero} `} ref={showing}>
 
    
      <div className={style.container}>
      <img
          src="./—Pngtree—cv icon vector design_9071006.png"
          alt="planet 1"
          className={`${style.planet}  ` } 
          style={{opacity:{...state,shower}}}
        />
        <img
          src="./43.png"
          alt="planet 2"
          className={`${style.planet} ` } 
          style={{opacity:{...state,mode}}}
        />
        
      </div>
      <div className={style.heroText} ref={showing}>
        <h2>Revolutionizing the Future with AI</h2>
        <p>
          Our AI-powered Career Roadmap Generator is a cutting-edge platform designed to help professionals unlock new career opportunities based on their existing skills, experience, and qualifications. By simply uploading your CV, the system uses advanced artificial intelligence to assess your professional background, strengths, and career trajectory. It then suggests personalized career paths, potential job roles, and industry shifts that align with your skills and goals.
        </p>
        <a href="#contact" className={style.ctaBtn}>
          Get Started
        </a>
      </div>
    </div>
  );
}

export default HomePage;
