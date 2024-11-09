import React, { useState } from "react";
import vg from "../assets/vg.png";
import { toast } from "react-hot-toast";
import mail_icon from "../assets/mail_icon.svg";
import call_icon from "../assets/call_icon.svg";
import location_icon from "../assets/location_icon.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    //  console.log(name,email,message);
    //  toast.success("Message Sent");
    try {
    } catch (error) {
      console.log("error is there in submitting the contact form", error);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            If you have any query related to Data Structures, Software
            development, feel free to contact me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              {/* <img className="logos" src={mail_icon} alt="" />{" "} */}
              <p>ritikporwal710@gmail.com</p>
            </div>
            <div className="contact-detail">
              {/* <img className="logos" src={call_icon} alt="" />{" "} */}
              <p>+91 8439026710</p>
            </div>
            <div className="contact-detail">
              {/* <img className="logos" src={location_icon} alt="" />{" "} */}
              <p>Bengaluru, India</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <section>
<form onSubmit={submitHandler}>
  <h2>Send Me a Message</h2>
  <input type="text"  value = {name}   
  onChange= {(e) => setName(e.target.value)}
  placeholder='Your name' required />
  <input type="email" value = {email} 
  onChange= {(e) => setEmail(e.target.value)}
  placeholder='Email' required />
  <input type="text" id='msg'  value = {message} 
  onChange= {(e) => setMessage(e.target.value)}
  placeholder='Type your message here..' required />
  
  <button type='submit'>Send</button>
</form>
</section>

<aside>
<img src={vg} alt="#logo" />
</aside> */
}
