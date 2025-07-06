import './footer.css';
import linkedinSocial from '../../assets/pics/linkedin.svg';
import githubSocial from '../../assets/pics/github.svg';
import twitchSocial from '../../assets/pics/twitch.svg';
import discordSocial from '../../assets/pics/discord.svg';
import facebookSocial from '../../assets/pics/facebook.svg';
import instagramSocial from '../../assets/pics/instagram.svg';

export default function Footer() {
  return (
    <footer>
      <p>Check me out Online!</p>
      <div>
        <a
          className="social-card"
          href="https://www.instagram.com/christhewebguy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icons"
            src={instagramSocial}
            alt="Instagram Logo"
          />
        </a>
        <a
          className="social-card"
          href="https://www.facebook.com/profile.php?id=61578262461583  "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icons"
            src={facebookSocial}
            alt="Facebook Logo"
          />
        </a>

        <a
          className="social-card"
          href="https://www.linkedin.com/in/christopherrobinsonwebdeveloper/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icons"
            src={linkedinSocial}
            alt="LinkedIn Logo"
          />
        </a>

        <a
          className="social-card"
          href="https://github.com/CRobinson1985"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icons" src={githubSocial} alt="GitHub Logo" />
        </a>

        <a
          className="social-card"
          href="https://www.twitch.tv/mrbawkbagock"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icons" src={twitchSocial} alt="Twitch Logo" />
        </a>

        <a
          className="social-card"
          href="https://discord.gg/drP6fhfXDS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icons"
            src={discordSocial}
            alt="Discord Logo"
          />
        </a>
      </div>
    </footer>
  );
}
