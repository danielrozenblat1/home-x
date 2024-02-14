import React, { useEffect, useRef } from 'react';
import styles from './Specialties.module.css';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';

const Specialties = (props) => {
  const playerRef1 = useRef(null);

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();

    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 1000,
      distance: '20px',
      origin: 'top',
      easing: 'ease-in-out',
      reset: false,
      viewFactor: 0.2,
      interval: 100,
      delay: 200,
      scale: 1,
    });
  }, []);

  const descriptionParagraphs = props.description.split('<br>').map((paragraph, index) => (
    <p key={index} >
      {paragraph}
    </p>
  ));

  return (
    <div className={styles['shape-container']}>
      <div className={styles['rectangle']}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.description}>{descriptionParagraphs}</div>
      </div>
      <div className={styles['circle']}>
        <div className={styles.content}>
          <Player ref={playerRef1} size="40%" icon={props.icon} onComplete={() => { playerRef1?.current?.playFromBeginning(); }} />
        </div>
      </div>
    </div>
  );
};

export default Specialties;
