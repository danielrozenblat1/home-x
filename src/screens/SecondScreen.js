import Specialties from "../components/Specialties"
import styles from "./SecondScreen.module.css"
import morgadge from "../icons/wired-outline-1652-mortgage-loan.json"
import loan from "../icons/wired-outline-2367-loan.json"
import withdraw from "../icons/wired-outline-2066-withdrawal.json"
import check from "../icons/wired-outline-999-money-check.json"
import Button from "../components/Button"
const SecondScreen=()=>{


    return <>
    <div className={styles.title}>תחומי מומחיות</div>
    <div className={styles.row}>
    <Specialties
  icon={withdraw}
  title="משכנתא למסורבים"
  description="ישנן סיבות שונות לסירוב משכנתא על ידי הבנק הנובעות בעיקרן בשל חוסר ודאות של הבנק ביכולת ההחזר של הלווה, בין היתר, בעקבות: <br> • חיווי אשראי שלילי <br> • אי דיווח מלא על הכנסות <br>• בעיות עבר עם הבנק <br>• הליכים משפטיים <br>ניסיוננו הרב והיכרותנו העמוקה בתהליכי הבנקים מאפשרים לנו לזהות ולגשר על פערים אלו, ובכך לסייע גם למסורבים להשיג משכנתא."
/>
<Specialties
  icon={morgadge}
  title="מחזור משכנתא"
  description="במחזור משכנתא ישנה אפשרות לפירעון מוקדם של הלוואת המשכנתא הקיימת (כולה או חלקה) על ידי לקיחת משכנתא בתנאים חדשים. <br> בהליך זה ניתן, בין היתר, לשנות את: <br>• מסלולי ההלוואה <br>• תקופת ההלוואה <br>באמצעות מחזור המשכנתא נוכל לשפר את מצבנו, בין אם בחסכון בסכום ובין אם בהפחתת סכום ההחזר החודשי על מנת לפנות את תזרים המזומנים."
/>



    </div>
    <div className={styles.row}>
    <Specialties
  icon={check}
  title="משכנתא לאיחוד הלוואות"
  description="משכנתא לאיחוד הלוואות הינה משכנתא הנלקחת על מנת לאחד מספר הלוואות וחובות קיימים להלוואה אחת. באמצעות לקיחת משכנתא לכל מטרה יוכל הלווה לפרוע הלוואות מסוגים שונים ולקבל הלוואה אחת בריבית נמוכה.<br>  משכנתא לאיחוד הלוואות מעניקה ללווה: <br>• הפחתה בהחזר החודשי <br>• החזר תשלום במועד אחד"
/>
<Specialties
  icon={loan}
  title="משכנתא חדשה"
  description="ליווי מלא, אישי וצמוד בתהליך רכישת: <br>• נכס מקבלן <br>• דירת יד שנייה <br>• מחיר למשתכן <br>אנחנו ב-Home-X מתמחים באפיון והתאמת משכנתא מכל הסוגים עבור הלקוחות שלנו. אנו נלווה אתכם בכל הדרך בליווי אישי ובמינימום מאמץ והתעסקות מצדכם ,מרגע האפיון ועד לקבלת כספי המימון."
/>
    </div>  

{/* <Button text="לשיחת ייעוץ חינמית"/> */}
    
    </>
}
export default SecondScreen