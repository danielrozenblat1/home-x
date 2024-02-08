import React, { useEffect, useRef } from 'react';
import styles from './Specialties.module.css';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';
const Specialties = (props) => {

const playerRef1=useRef(null)
    useEffect(()=>{
        playerRef1?.current?.playFromBeginning();

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "20px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:true,
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
    
          });

    },[])

  return (
    <div className={styles["shape-container"]}>
      <div className={styles["rectangle"]}>
        <h1 className={styles.title}>{props.title}</h1>
       <div className={styles.description}>{props.description}</div> 
      </div>
      <div className={styles["circle"]}>
        <div className={styles.content}>
      <Player ref={playerRef1} size="40%" icon={props.icon} onComplete={()=>{playerRef1?.current?.playFromBeginning()}}/>
          </div>
      </div>
    </div>
  );
};

export default Specialties;