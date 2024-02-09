import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';
import ProcessIcon from '@mui/icons-material/Autorenew';
import BoxesIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Typography from '@mui/material/Typography';
import ScrollReveal from 'scrollreveal';
import GroupIcon from '@mui/icons-material/Group';

import styles from "./ForthScreen.module.css";
import { Link } from 'react-scroll';
import Button from '../components/Button';



export default function CustomizedTimeline() {


    React.useEffect(()=>{
  
  
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
          ScrollReveal().reveal(`#item1`, {
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
          ScrollReveal().reveal(`#item2`, {
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
            ScrollReveal().reveal(`#item3`, {
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
       
    },[])
  return <>
  <div className={styles.title} id="תהליך העבודה">תהליך העבודה איתי</div>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
          fontFamily="Rubik"
       
        >
          <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem"   id="item1">
            1
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'white' }}/>
          <PhoneIcon fontSize="large" sx={{ color: '#ff5f1f' }}/>
          <TimelineConnector   sx={{ bgcolor: 'white' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '60px', px: 2 }}>
          <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="white" id="item1" textAlign="right" >
          שיחת ייעוץ + אפיון 
          </Typography>
          <Typography fontFamily="RubikR"  dir="rtl" fontSize="1rem" color="white" id="item1" marginRight="auto" textAlign="right" >
           הכרת הלקוח, הסברה ללקוח אילו עסקאות הוא יכול לבצע על בסיס הנתונים שהוא מציג ואפיון העסקה יחד איתו
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
          fontFamily="Rubik"
        >
          <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" color="white" id="item2">
            2
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'white' }} />
          <DescriptionIcon fontSize="large" sx={{ color: '#ff5f1f' }} />
          <TimelineConnector sx={{ bgcolor: 'white' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '60px', px: 2 }}>
          <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="white" id="item2" textAlign="right" >
          בניית תמהיל מתאים
          </Typography>
          <Typography fontFamily="RubikR"  dir="rtl" fontSize="1rem" color="white" id="item2"  marginLeft="auto" textAlign="right"  >
          נגדיר את מסלולי הריביות, לוחות הסילוקין ומספר שנות כל מסלול, תוך התחשבות בתרחישים עתידיים כמו שינוי מצב פיננסי, פירעונות מוקדמים ועוד...
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
          fontFamily="Rubik"
        >
          <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item3">
          3
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  sx={{ bgcolor: 'white' }}/>
          <GroupIcon fontSize="large" sx={{ color: '#ff5f1f' }} />
          <TimelineConnector sx={{ bgcolor: 'white' }} fontFamily="Rubik" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '60px', px: 2 }}>
          <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="white" id="item3" textAlign="right" >
         משא ומתן מול הבנקים
          </Typography>
          <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="white" id="item3" textAlign="right" >
          לאחר שכבר חסכנו הרבה מאוד כסף בזכות בנייה נכונה של תמהיל , אנחנו ב-Home-X עובדים באופן שוטף מול בנקאיים בכירים בכל הבנקים להשיג עבורכם את הריביות הטובות ביותר ! 
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    <Button text="לשיחת ייעוץ חינמית"/>
    </>
}
