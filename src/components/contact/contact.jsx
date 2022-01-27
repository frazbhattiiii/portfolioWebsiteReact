import { useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm("service_bowusee","template_nv3hfra",e.target,"user_UH5ALqQzf7x1VCQiHv30A").then(res=>{
      console.log(res);
    }).catch(err=>console.log(err))

  };
  return (
    <div className="contact" id="Contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email"
          name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}