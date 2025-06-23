import "./footer.css";
import linkedinSocial from "../../assets/pics/linkedin.svg";
import githubSocial from "../../assets/pics/github.svg";
import twitchSocial from "../../assets/pics/twitch.svg";
import discordSocial from "../../assets/pics/discord.svg";
import emailSocial from "../../assets/pics/envelope.svg";

export default function Footer () {
  return (
    <footer>
      <p>Check me out Online!</p>
      <div>
        
        <a className="social-card"
          href="https://www.linkedin.com/in/christopherrobinsonwebdeveloper/"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            className="social-icons"
            src={linkedinSocial}
            alt="LinkedIn Logo"
        /></a>

        <a className="social-card"
          href="https://github.com/CRobinson1985"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            className="social-icons"
            src={githubSocial}
            alt="GitHub Logo"
        /></a>

        <a className="social-card"
          href="https://www.twitch.tv/mrbawkbagock"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            className="social-icons"
            src={twitchSocial}
            alt="Twitch Logo"
        /></a>

        <a className="social-card"
          href="https://discord.gg/drP6fhfXDS"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            className="social-icons"
            src={discordSocial}
            alt="Discord Logo"
        /></a>
        
        <a className="social-card" href="mailto:crobinson92828@gmail.com">
          <img
            className="social-icons"
            src={emailSocial}
            alt="Email Me Icon"
            />
            </a>
      </div>
    </footer>
  );
}