import styles from "./NavBar.module.css"
import logo from "../images/לוגו 1.png"
import {Link as ScrollLink } from 'react-scroll';
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const NavBar=()=>{

    useEffect(()=>{

          ScrollReveal().reveal(`.${styles.navLink}`, {
            duration: 1000,
            distance: "20px",
            origin: "right", // Start from the right side
            easing: "ease-in-out",
            reset:true,
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
    
          });

    },[])


    return <><div className={styles.background}>

    {window.innerWidth>850&&<img className={styles.logo} src={logo} alt="home-x לוגו"/>}
    <div className={styles.row}>
    <ScrollLink to="צור קשר" smooth={true} duration={1500}><div className={styles.navLink}>צור קשר</div></ScrollLink>
    <ScrollLink to="תהליך העבודה" smooth={true} duration={1500}><div className={styles.navLink}>תהליך העבודה</div></ScrollLink>
    <ScrollLink to="קצת עלי" smooth={true} duration={1500}><div className={styles.navLink}>קצת עלי</div></ScrollLink>
    </div>
    </div>

    </>
    }
    export default NavBar