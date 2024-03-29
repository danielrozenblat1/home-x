import styles from "./FirstScreen.module.css"

import home from "../icons/wired-lineal-63-home.json"
import logo from "../images/home-x logo.png"
import { Player } from '@lordicon/react';
import { useEffect,useRef } from "react"
import ScrollReveal from "scrollreveal"
import NavBar from "../components/NavBar"
import Button from "../components/Button";
import DrawerAppBar from "../components/phoneNavBar/MuiNav";
const FirstScreen=()=>{
  const playerRef1=useRef(null)
  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };
    useEffect(()=>{
  
      playerRef1.current?.playFromBeginning();
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "right", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`#slogen`, {
            duration: 1000,
            distance: "30px",
            origin: "right", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
            ScrollReveal().reveal(`.${styles.buttons}`, {
              duration: 1000,
              distance: "30px",
              origin: "right", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
            ScrollReveal().reveal(`.${styles.image}`, {
                duration: 1000,
                distance: "30px",
                origin: "left", // Start from the right side
                easing: "ease-in-out",
                reset:false,
                viewFactor: 0.2,
                interval: 300, // Delay between each element
                delay: 200, // Delay before the animation starts
                scale: 1, // Set scale to 1 or null
              });
    },[])
return <>
{/* {window.innerWidth<= 850 && <DrawerAppBar/>} */}
{window.innerWidth>= 850 && <NavBar/>}
<div className={styles.container}>

<div className={styles.leftSide}>
     {/* <img className={styles.image} src={nir}/>  */}
     <Player ref={playerRef1} size="100%" onComplete={handleComplete}
            icon={home}
          />
</div>

<div className={styles.rightSide}>
{window.innerWidth <650 && <div className={styles.center}><img className={styles.logo} src={logo} alt="home-x ייעוץ משכנתאות"/></div>}
<div className={styles.title}>הבית שלכם בדרך למשכנתא</div>

<div className={styles.slogen} id="slogen">ייעוץ כל סוגי המשכנתאות ● פתרונות מימון יצירתיים ● איחוד הלוואות אחראי ● ליווי אישי לאורך כל הדרך  </div>
<div className={styles.buttons}>
  <Button text ="לשיחת ייעוץ חינמית"/>
 
 </div>
</div>

</div>

</>


}
export default FirstScreen