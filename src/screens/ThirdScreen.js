import styles from "./ThirdScreen.module.css" 
import logo from "../images/nir.png"


import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import Button from "../components/Button"
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

<div className={styles.title} id="קצת עלי"> מתכננים לך וודאות</div>
<div className={styles.wraper}>

<img className={styles.image} src={logo} alt="ניר בן דוד"/>
<div className={styles.text}>
<h1 className={styles.name}>ניר בן דוד</h1>
<div className={styles.li}>מומחה למשכנתאות</div>
<div className={styles.li}> מהנדס תעשייה וניהול</div>
<div className={styles.li}> 10 שנות נסיון בניהול תקציבים וסיכונים</div>


</div>

</div>
<div className={styles.p}>
במהלך השנים נתקלתי רבות באי תכנון או בתכנון לקוי של בניית תקציב שאפילו תנאי מימון טובים וריביות מעולות לא מנעו את כישלון הפרויקט. כמו בבניין, הכי חשוב לבנות יסודות חזקים ואיתנים, כך גם בבניית משכנתא.
בזכות עשרות תקציבים שבניתי וניהלתי, הבנתי את חשיבות התכנון המוקדם.
מתוך אהבה גדולה לפיננסים ולניהול סיכונים, נולד Home-X, הבית שלכם בדרך למשכנתא.
אם אתם מחפשים וודאות אשר נובעת מתכנון ממוקד וקפדני במשכנתא חדשה, איחוד הלוואות או מחזור משכנתא הגעתם למקום הנכון.
אנו כאן על מנת לתכנן ולהתאים לכם את המשכנתא הנכונה ביותר.
תוך שקלול הנתונים הנוכחיים והעתידיים שלכם, בידיוק כמו בבניית תקציב עבור חברה, אנחנו נחסוך לכם המון טעויות וכסף, נשמור על האינטרסים הפיננסיים שלכם ובעיקר בעיקר נעשה לכם סדר בחיים</div>

</div>
<Button text="לשיחת ייעוץ חינמית"/>
    </>
}
export default ThirdScreen