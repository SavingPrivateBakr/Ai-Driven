import React, { useEffect, useRef, useState } from 'react';
import style from './HomePage.module.css'; // Import the CSS module
import { Link, NavLink } from 'react-router-dom';
import Background from '../Background/Background';
import Stars from '../Stars/Stars';
function HomePage() {
 
  const [state, setState] = useState(true);
  const showing = useRef("");
  useEffect(() => {

    function toggle() {
  
      setInterval(() => {
        setState((prevState) => !prevState); // Toggle state every 3 seconds
      }, 3000);
  

  
    };
  
  
   
   
  
    return  toggle;
    }, []);
  
  

  return (
   <Background>
    <Stars />
    <div  className={`${style.hero} flex flex-col items-center justify-center h-screen`} ref={showing}>
 
    
      <div className={`${style.container} `}>
      <img
          src="./—Pngtree—cv icon vector design_9071006.png"
          alt="planet 1"
          className={`${style.planet} ${state ? style.loaded  : style.hidden}` } 
          
        />
        <img
          src="./43.png"
          alt="planet 2"
          className={`${style.planet} ${!state ? style.loaded  : style.hidden}` } 

        />
 
        
      </div>
      <div className={style.heroText} ref={showing}>
        <h2>Revolutionizing the Future with AI</h2>
        <p>
          Our AI-powered Career Roadmap Generator is a cutting-edge platform designed to help professionals unlock new career opportunities based on their existing skills, experience, and qualifications. By simply uploading your CV, the system uses advanced artificial intelligence to assess your professional background, strengths, and career trajectory. It then suggests personalized career paths, potential job roles, and industry shifts that align with your skills and goals.
        </p>
        <NavLink to="/Decision" className={style.ctaBtn}>
          Get Started
        </NavLink>
    
      </div>
    </div>
    </Background>
  );
}

export default HomePage;
