import React, { useState } from "react";
import vg from "../assets/vg.png";
import { toast } from "react-hot-toast";
import mail_icon from "../assets/mail_icon.svg";
import call_icon from "../assets/call_icon.svg";
import location_icon from "../assets/location_icon.svg";
// export declare const AiOutlineContacts: IconType;

import {
  AiOutlineContacts,
  AiFillMail,
  AiOutlineHeatMap,
  AiFillContacts,
  AiOutlineHome,
  AiFillHome,
} from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const submitHandler = (e) => {
  //   e.preventDefault();

  // };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "66cecba1-d2b6-4ecd-9df8-dea586bf88c4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      // console.log("Success", res);
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
              <a target={"blank"}>
                <AiFillMail />
              </a>
              <p>ritikporwal710@gmail.com</p>
            </div>
            <div className="contact-detail">
              <a target={"blank"}>
                <AiFillContacts />
              </a>
              <p>+91 8439026710</p>
            </div>
            <div className="contact-detail">
              <a target={"blank"}>
                <AiFillHome />
              </a>
              <p>Bengaluru, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="7"
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
