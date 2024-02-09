import { useEffect, useRef, useState } from "react";
import Button from "../components/Button"
import  styles from "./DetailsPage.module.css"
import ScrollReveal from "scrollreveal";
const DetailsPage=()=>{

  const nameRef=useRef('')
    const phoneRef=useRef('')
    const emailRef=useRef('')




   
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
    },[])


    const submitHandler=async(e)=>{
      e.preventDefault()
      const name=nameRef.current.value
      const phone=phoneRef.current.value
      const email=emailRef.current.value
      if(name.trim().length<=2){
      
      alert("אנא הכנס שם מלא ")
      return;
      }
      if(phone.trim().length!==10){
      
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות ")
      return;
          }
          if(!email.includes("@")){
           
              alert("אנא הכנס מייל תקין ")
              return;
              }


              
         
     const formData={
      name:name,
      phone:phone,
      email:email,
      reciver:"nir@home-x.co.il"
     }
  const response= await fetch('',{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formData)
     })
          
          if(response.ok){

          alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים")
          nameRef.current.value=""
          phoneRef.current.value=""
          emailRef.current.value=""
      
          }
  }



return <>

<div className={styles.container}>

    <div className={styles.title} id="צור קשר">הכל מתחיל כאן</div>
<form className={styles.form}>
<input ref={nameRef} className={styles.input} placeholder="שם מלא"></input>
<input ref={phoneRef} className={styles.input} placeholder="מספר טלפון"></input>
<input ref={emailRef} className={styles.input}  placeholder="דוא''ל"></input>



<div className={styles.center}><button className={styles.button} onClick={submitHandler}>שלח</button></div>

</form>


</div>
</>


}
export default DetailsPage