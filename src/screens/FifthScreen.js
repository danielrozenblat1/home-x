import styles from "./FifthScreen.module.css"
import special from "../icons/wired-lineal-1353-membership-vip-card.json"
import brain from "../icons/wired-lineal-426-brain.json"
import time from "../icons/wired-lineal-472-hourglass.json"
import nagotiation from "../icons/wired-lineal-969-meeting-conference-room.json"
import together from "../icons/wired-lineal-456-handshake-deal.json" 
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import { Player } from "@lordicon/react"
import Button from "../components/Button"
const FifthScreen=()=>{
    const playerRef1=useRef()
    const playerRef2=useRef()
    const playerRef3=useRef()
    const playerRef4=useRef()
    const playerRef5=useRef()
    useEffect(()=>{
  
  
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.section}`, {
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
            ScrollReveal().reveal(`.${styles.stepHeader}`, {
              duration: 1000,
              distance: "30px",
              origin: "top", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
        playerRef4.current?.playFromBeginning();    
        playerRef5.current?.playFromBeginning();  
    },[])

return <>
<div className={styles.title}>למה צריך יועץ משכנתאות ?</div>
<div className={styles.bigWrapper}>

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()}
icon={brain}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>ידע וניסיון </div>
    <div className={styles.section}>יועץ משכנתאות הוא מומחה שעוסק בתחום כל הזמן. הוא מכיר את כל המוצרים, הבנקים, התנאים וההסדרים השונים שיש בשוק המשכנתאות. לכן הוא יכול להתאים את המשכנתא הכי טובה עבורכם. </div>
</div>
</div>
{/* חץ לשלב הבא */}

<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>חיסכון בזמן </div>
    <div className={styles.section}>תהליך לקיחת משכנתא הוא מורכב וכרוך בהרבה ניירת וטפסים. יועץ המשכנתאות ייקח את זה על עצמו ויחסוך לך המון זמן וכאב ראש.</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef2} delay={500} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()}
icon={time}/>
</div>
</div>

{/* חץ לשלב הבא */}

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef3} size="100%" onComplete={() => playerRef3.current?.playFromBeginning()}
icon={nagotiation}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>מו"מ טוב יותר</div>
    <div className={styles.section}>יועץ משכנתאות מנוסה יודע לנהל מו"מ טוב יותר מול הבנקים כדי להשיג עבורך את התנאים הכי טובים.</div>
</div>
</div>
<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>התאמה אישית </div>
    <div className={styles.section}>יועץ המשכנתאות יבדוק את מצבך האישי וימליץ לך על המשכנתא הכי מתאימה עבורך, בהתאם לצרכים וליכולות שלך.</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef4} delay={500} size="100%" onComplete={() => playerRef4.current?.playFromBeginning()}
icon={special}/>
</div>
</div>
<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef5} size="100%" onComplete={() => playerRef5.current?.playFromBeginning()}
icon={together}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>ליווי מקצועי </div>
    <div className={styles.section}>היועץ ילווה אותך בכל התהליך עד לקבלת המשכנתא, יענה על שאלות ויפתור בעיות שמתעוררות.</div>
</div>
</div>
 <Button text="לשיחת ייעוץ חינמית"/> 
</div>



</>
}
export default FifthScreen