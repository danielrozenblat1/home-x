import styles from "./SocialMedia.module.css"
import facebook from "../images/facebook nir ben david.png"
import instagram from "../images/instagram nir ben david.png"
import whatsapp from "../images/whatsApp nir ben david.png"
const SocialMedia=()=>{
    const message="היי ניר , הגעתי אליך דרך האתר ,הייתי רוצה "
    const phoneNumber="+972502337223"
    const encodedMessage = encodeURIComponent(message); 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
return<>
    <div className={styles.social}>זמינים עבורכם גם ב</div>
    <div className={styles.row}>
    <a target="_blank" href='https://www.facebook.com/profile.php?id=61556046658791&mibextid=ZbWKwL'><img className={styles.image} src={facebook} alt ="פייסבוק ניר בן דוד"/></a>
    <a target="_blank" href='https://www.instagram.com/_nir.ben.david_/'>  <img className={styles.image} src={instagram} alt ="אינסטגרם ניר בן דוד"/></a>
    <a className={styles.a}  href={whatsappUrl}  target="_blank" rel="noopener noreferrer" > <img className={styles.image} src={whatsapp} alt ="ווצאפ ניר בן דוד"/></a>
  
    </div>
    </>
}
export default SocialMedia