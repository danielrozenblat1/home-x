import styles from "./ThirdScreen.module.css" 
import logo from "../images/nir.png"


import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const ThirdScreen=()=>{

   
    useEffect(()=>{
  
  
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
        

          ScrollReveal().reveal(`.${styles.li}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          
          ScrollReveal().reveal(`.${styles.image}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });

    },[])

    return <>
    
 <div className={styles.wrap}>

<div className={styles.title} id="קצת עלי"> מנצחים את הבנקים </div>
<div className={styles.wraper}>

<img className={styles.image} src={logo} alt="ניר בן דוד"/>
<div className={styles.text}>
<h1 className={styles.name}>ניר בן דוד</h1>
<div className={styles.li}> יועץ משכנתאות </div>
<div className={styles.li}> מומחה בביטוחים ופנסיה</div>
<div className={styles.li}>ניהול פרויקטים ותקציבים</div>


</div>
</div>
</div>
    </>
}
export default ThirdScreen