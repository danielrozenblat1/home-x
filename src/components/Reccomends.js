
import styles from "./Reccomends.module.css"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 import reccomend1 from "../images/ניב תיייר המלצה home-x.png"
import reccomend from "../images/חן פרטוש המלצה home-x.png"
import reccomend2 from "../images/שיראל ותומר זוגייר המלצה home-x.png"
import reccomend3 from "../images/מור גורין המלצה home-x.png"
import reccomend4 from "../images/הוד ושני אפרגון המלצה home-x.png"


import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Reccomends=()=>{
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
     
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    const content = [
  
        {
          type: 'image',
          src: reccomend,
          alt:"חן פרטוש המלצה home-x"
        },
     

          {
            type: 'image',
            src: reccomend1,
            alt:"ניב תיייר המלצה home-x"
          },
          {
            type: 'image',
            src: reccomend2,
            alt:"שיראל ותומר זוגייר המלצה home-x"
          },
          {
            type: 'image',
            src: reccomend3,
            alt:"מור גורין המלצה home-x"
          },
          {
            type: 'image',
            src: reccomend4,
            alt:"הוד ושני אפרגון המלצה home-x"
          },

      
 
        // Add more images and videos as needed
      ];

      useEffect(()=>{

        ScrollReveal().reveal(`.${styles.li}`, {
            duration: 600,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:true,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.explain}`, {
              duration: 600,
              distance:"30px",
              origin:"top",
              easing: "ease-out",
              reset:true,
              viewFactor: 0.2,
              interval: 500, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 0.8, // Set scale to 1 or null
      
            });
  
          ScrollReveal().reveal(`.${styles.title}`, {
              duration: 600,
              distance: "30px",
              origin: "top", // Start from the right side
              easing: "ease-in-out",
              reset:true,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
            ScrollReveal().reveal(`.${styles.image}`, {
              duration: 1000,
              distance: "30px",
              origin: "bottom", // Start from the right side
              easing: "ease-in-out",
              reset:true,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
      },[])
return <>

<div className={styles.title} id="תלמידים ממליצים">לקוחות ממליצים</div>

<div className={styles.explain}>הגיע הזמן לשמוע מלקוחות שכבר מרגישים בבית</div>

<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={item.alt} />
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
              )}
            </div>
          ))}
        </Slider>
      </div>

</>
}
export default Reccomends