import React, {useState} from 'react';
import vg from '../assets/vg.png'
import { toast } from 'react-hot-toast';
const Contact = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const submitHandler = (e) =>{
    e.preventDefault(); 
    //  console.log(name,email,message);
    //  toast.success("Message Sent");
    try {
      
    } catch (error) {
      console.log("error is there in submitting the contact form",error);
    }
  }
  return (
    <div id='contact'>

      
      <section>
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
      </aside>

    </div>
  )
}

export default Contact;