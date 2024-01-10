import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
     <div className=" flex justify-center my-3"><h1>Contact page</h1></div>
     <div className=" flex justify-center my-4">
     <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114306.49103782742!2d74.55331294985984!3d26.453219568390836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be6d8fcb7cd01%3A0xcbaf8f12eb8100ee!2sAjmer%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1704422288729!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{border:'0'}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  
     </div>
    
    <ContactForm/>
    
    </>
  );
}

export default Contact;
