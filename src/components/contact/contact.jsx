import "./contact.css";
export default function Contact() {
  return (
    <div id="contact">
      <h2>Contact me</h2>
      <p>Interested in employing my services or collaborating? Please feel free to get in touch! You can also get in touch with me through my social links below.</p>
      <form action="submit">
        <input type="email" name="email" id="email-input" />
        <input type="name" name="name" id="name-input" />
        <input type="text" name="message" id="message-input" />
        <button id="submit-btn" type="submit">Submit</button>
      </form>
    </div>

  );
}