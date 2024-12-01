import React from 'react';
import styles from './Decision.module.css';  // Importing CSS module
import DecisionBackground from '../Background/DecisionBackground';

function Decision() {
  return (
    <DecisionBackground>
    <div className={styles.wholeDecision}>
      <div className={styles.decisionPanels}>
        <div className={`${styles.panel} ${styles.panelLeft}`} >
        <img src="./vecteezy_isolated-page-sticker-png_20693155.png" alt="Make A CV" style={{width: '50%'}} />

          <h2>Make A CV</h2>
        </div>

        <div className={`${styles.panel} ${styles.panelRight}`} id="panel-right">
          <img src="./76e899a3b193a.png" alt="Already Have One" />
          <h2>Already Have One</h2>
        </div>
      </div>

      <p className={styles.paragraphText} id="dynamic-paragraph">Hover over a panel to learn more.</p>
    </div>
    </DecisionBackground>
  );
}

export default Decision;
