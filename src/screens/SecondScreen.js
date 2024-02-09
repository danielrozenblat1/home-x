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
    <Specialties icon={withdraw} title="משכנתא למסורבים" description="ישנן סיבות שונות לסירוב משכנתא על ידי הבנק, הנובעות בעיקרן בשל חוסר ודאות של הבנק ביטחון ביכולת ההחזר של הלווה, אי דיווח מלא על ההכנסות, בעיות עבר עם הבנק והליכים משפטיים. ניסיוננו הרב והיכרותנו העמוקה בתהליכי הבנקים מאפשרים לנו לזהות ולתקן טעויות אלה, ובכך לסייע למסורבים להשיג משכנתא"/>
<Specialties icon={morgadge} title="מחזור משכנתא" description="מיחזור משכנתא הוא הליך בו מקימים משכנתא חדשה לגמרי או מסלול חלקי חדש לצורך פרעון מסלול יקר או משכנתא יקרה. מעצם גמישותו של מוצר המשכנתא אנו יכולים לשפר ולהתאים את תמהיל ההלוואה למצב העדכני שלנו בחיים. בין אם זה חסכון בסכום ההלוואה בעקבות הורדת ריביות ובין אם זה הפחתת סכום ההחזר החודשי על מנת לפנות את תזרים"/>


    </div>
    <div className={styles.row}>
    <Specialties icon={check} title="משכנתא חדשה" description="בין אם זאת משכנתא לרכישת נכס מקבלן / משכנתא לרכישת דירת יד שנייה / משכנתא לכל מטרה או משכנתא במחיר למשתכן אצלנו ב-Home-X אנחנו מתמחים באפיון והתאמת משכנתא מכל הסוגים עבור הלקוחות שלנו. אנו נלווה אתכם בכל הדרך בליווי אישי במינימום מאמץ והתעסקות מצדכם מרגע האפיון ועד לקבלת כספי המימון."/>
    <Specialties icon={loan} title="משכנתא לאיחוד הלוואות" description="משכנתא לאיחוד הלוואות היא משכנתא הנלקחת על מנת לאחד מספר הלוואות וחובות קיימים להלוואה אחת.
באמצעות לקיחת משכנתא לכל מטרה יוכל הלווה לפרוע הלוואות מסוגים שונים ולקבל הלוואה אחת בריבית נמוכה.
משכנתא לאיחוד הלוואות מעניקה ללווה הפחתה בהחזר החודשי והחזר תשלום במועד אחד."/>
    </div>  

{/* <Button text="לשיחת ייעוץ חינמית"/> */}
    
    </>
}
export default SecondScreen