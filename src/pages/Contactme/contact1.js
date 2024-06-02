import React, { useState } from 'react';
import './contact1.css';
import { toast } from "react-toastify";
import axios from "axios";
import Rotate from 'react-reveal/Rotate'

const Contact = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if (!name || !email || !msg) {
            toast.error("PLease Provide all fields");
          }
          const res = await axios.post("http://localhost:8000/send-email", {
            name,
            email,
            message:msg,
          });
          //validation success
          if (res.status === 200) {
            toast.success("email sent successfully");
            setname("");
            setEmail("");
            setMsg("");
          } else {
            toast.error("failed to send email");
          }
        } catch (error) {
          console.log(error);
          toast.error("An error occurred. Please try again later.");
        }
      };

  

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
     <Rotate>
      <h1>Contact Me</h1>
      <div className="form-group" id="contact">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='enter your name'
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      </Rotate>
    </form>
  );
};

export default Contact;
