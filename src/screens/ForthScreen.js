import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Typography from '@mui/material/Typography';
import ScrollReveal from 'scrollreveal';
import GroupIcon from '@mui/icons-material/Group';

import styles from "./ForthScreen.module.css";
import { Link } from 'react-scroll';
import Button from '../components/Button';

const CustomizedTimeline = () => {

  React.useEffect(() => {

    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 500,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item1`, {
      duration: 500,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item2`, {
      duration: 500,
      distance: "30px",
      origin: "left",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item3`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

  }, []);

  return (
    <>
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
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item1">
              1
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'white' }} />
            <PhoneIcon fontSize="large" sx={{ color: '#ff5f1f' }} />
            <TimelineConnector sx={{ bgcolor: 'white' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="white" id="item1" textAlign="right" direction="rtl" marginBottom="0">
              שיחת ייעוץ ואפיון
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="white" id="item1" textAlign="right" marginBottom="0">
            בשיחה זו נכיר אתכם ואת הנתונים הפיננסיים שלכם. תוך שקלול הנתונים נאפיין את סוגי העסקאות הרלוונטיות עבורכם ואת הפעולות הנדרשות 
להמשך התהליך
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
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="white" id="item2" textAlign="right" direction="rtl" marginBottom="0">
            בניית תמהיל משכנתא מותאם אישית
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="white" id="item2" marginLeft="auto" textAlign="right" marginBottom="0">
            בשלב זה נגדיר את מסלולי הריביות, לוחות הסילוקין ומספר שנות כל מסלול, תוך התחשבות בתרחישים עתידיים כמו שינוי מצב פיננסי, שינוי 
סטטוס בחיים, פירעונות מוקדמים ועוד...
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
            <TimelineConnector sx={{ bgcolor: 'white' }} />
            <GroupIcon fontSize="large" sx={{ color: '#ff5f1f' }} />
            <TimelineConnector sx={{ bgcolor: 'white' }} fontFamily="Rubik" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="white" id="item3" textAlign="right" direction="rtl" marginBottom="0">
            משא ומתן מול הבנקים 
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="white" id="item3" textAlign="right" marginBottom="0">
            לאחר שכבר חסכנו הרבה מאוד כסף בזכות בנייה נכונה של תמהיל המשכנתא , <br/>אנחנו ב Home-X עובדים באופן שוטף מול בנקאיים בכירים בכל 
הבנקים ובשלב זה נדאג להשיג עבורכם את הריביות הטובות ביותר ! 
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
              4
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'white' }} />
            <EditIcon fontSize="large" sx={{ color: '#ff5f1f' }} />
            <TimelineConnector sx={{ bgcolor: 'white' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="white" id="item2" textAlign="right" direction="rtl" marginBottom="0">
            חתימה על משכנתא
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="white" id="item2" textAlign="right" marginBottom="0">
            ברכות ! אושרה לכם משכנתא מותאמת עבורכם באופן אישי. 
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
              5
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'white' }} />
            <HandshakeIcon fontSize="large" sx={{ color: '#ff5f1f' }} />
            <TimelineConnector sx={{ bgcolor: 'white' }} fontFamily="Rubik" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="white" id="item3" textAlign="right" direction="rtl" marginBottom="0">
            הקשר רק התחיל 
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="white" id="item3" textAlign="right" marginBottom="0">
            אנחנו ב Home-X <br/> מאמינים בשותפים לדרך, ולכן אנחנו מתחייבים להמשיך לתמוך ולהיות זמינים עבורכם בכל שאלה או בקשה
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Button text="לשיחת ייעוץ חינמית" />
    </>
  );
};

export default CustomizedTimeline;