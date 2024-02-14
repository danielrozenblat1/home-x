import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from './Button';
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
  
    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 0px 3px 1px orange',
          width: "100%",
          margin: "auto",
          background: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              color: 'white', // Apply white color to content
              fontFamily: 'RubikR',
              direction: "rtl",
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for white color
              color: 'white',
            },
           
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'white', // Apply white color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid orange', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'RubikR'}}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            direction:"rtl",
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
      {/* <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000026" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,117.3C672,128,768,192,864,224C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
    <div className={styles.title}>שאלות נפוצות</div>
      <DropdownAccordion title="הבנק לא מאפשר לי ללוות משכנתא, איך איתך הם יאפשרו ?" content="אנחנו ב-Home-X מתמחים באישורי משכנתאות גם למסורבים ולתיקים המורכבים ביותר.
בעזרת הקשרים האישיים שלנו בבנקים, הבנת הרגולציה והכרת המסלולים המיוחדים בכל בנק ובנק נדע לאשר לכם משכנתא בתנאים הטובים ביותר." />
      <DropdownAccordion title="אני עדיין מחזיר הלוואה לבנק, אני יכול לקחת עוד משכנתא/הלוואה ?" content="כמובן. על פי תקנות בנק ישראל, אתם זכאים לקבלת משכנתא באחוזי מימון שונים כנגד שעבוד נכס נוסף או חליפי. כל זאת בהתאם ליכולת ההחזר וההון העצמי. " />
      <DropdownAccordion title="אני חייב לקחת משכנתא מהבנק שאני נמצא בו ?" content="ממש לא. ניתן לקחת משכנתא בכל בנק, גם אם זה לא הבנק שבו אתם מנהלים את החשבון שלכם.
אנחנו ב-Home-X עובדים באופן צמוד עם כל הבנקים ונשדך עבורכם את הבנק המתאים ביותר בהתאם לאופי המשכנתא."/>
      <DropdownAccordion title= "מה זה תמהיל ומה החשיבות שלו בלקיחת משכנתא ?" content=" התמהיל הוא הדבר הכי חשוב בבניית המשכנתא. התמהיל מורכב מבחירת מסלולי הריביות, סוגי לוחות הסילוקין ומספר שנות כל מסלול. אין 
נוסחה לתמהיל האידאלי ולכל לווה יתאים תמהיל אחר. בניית תמהיל נכון עבור הלווה יכולה לייצר חיסכון של עשרות ועד מאות אלפי שקלים 
לאורך חיי המשכנתא. אנחנו ב- X-Home יודעים לבנות ביחד איתכם את התמהיל המדויק ביותר עבורכם בהתחשב באופי העסקה שלכם, יכולת 
ההחזר וההתנהלות הפיננסית שלכם"/>
      <DropdownAccordion title="חיווי האשראי שלי שלילי, איך אני עדיין יכול לקבל משכנתא ?" content="ישנם מספר פתרונות אפשריים לקבלת משכנתא במצבים אלו. כל בנק בודק באופן שונה את הלווה והתנהלותו הכלכלית. אנחנו ב -X-Home 
מכירים את הקריטריונים ושיטות הבדיקה של כל הבנקים ונדע עוד לפני הגשת הבקשה באילו בנקים נוכל להשיג את המשכנתא האופטימלית 
ביותר עבורך
"/>
<Button text="לשיחת ייעוץ חינמית"/>
      {/* <DropdownAccordion title="מה אני עושה אם אני אתקל בבעיה ? " content="אז סביר להניח שיהיו דברים מאתגרים, בשביל זה אני כאן. אני אלווה אותך בכל מהלך תוכנית ההכשרה מפתיחת החנות ועד לחנות יציבה ורווחית באיביי" />
      <Accordion
        disabled
        sx={{
          width: "50%",
          margin: "0 auto",
          background: "none",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography></Typography>
        </AccordionSummary>
      </Accordion> */}

    </div>
  
  );
}
