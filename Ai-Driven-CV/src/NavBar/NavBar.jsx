import React from 'react';
import styles from './NavBar.module.css'; // Import the CSS module

function NavBar() {
    return (
   
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <h1>AI Solutions</h1>
                </div>
                <ul className={styles.navLinks} >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
                <ul className={styles.signing}>
                    <li><a href="#contact" className={styles.login}>Login</a></li>
                    <li><a href="#contact" className={styles.login}>SignUp</a></li>
                </ul>
            </nav>
       
    );
}

export default NavBar;
