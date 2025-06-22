import { useState } from "react";
import "./contact.css";

export default function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ac95cd74-fc42-4f46-88ec-ef9769432a4d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact-div">
      <h2>Contact me</h2>
      <p>Interested in employing my services or collaborating? Please feel free to get in touch! You can also get in touch with me through my social links below.</p>
      <form onSubmit={onSubmit} >
        <label htmlFor="name-input">Name</label>
        <input type="name" name="name" id="name-input" required />
        <label htmlFor="email-input">Email</label>
        <input type="email" name="email" id="email-input" required />
        <label htmlFor="message-input">Enter a Quick Message</label>
        <textarea name="message" id="message-input"></textarea>
        <button id="submit-btn" type="submit">Submit</button>
      </form>
      <span>{result}</span>
    </div>

  );
}