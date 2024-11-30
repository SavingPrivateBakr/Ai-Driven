import React from 'react';
import styles from './Stars.module.css'; 

function Stars() {

  const stars = Array.from({ length: 40 }, (_, index) => (
    <div key={index} className={`${styles.star} ${styles[`star${index + 1}`]}`}></div>
  ));

  return <>{stars}</>;
}

export default Stars;
