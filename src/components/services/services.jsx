import './services.css';

export default function Services() {
  return (
    <div id="services" className="services-div">
      <div className='img-div'>
      <img src="/coding-glasses.jpg" alt="" />
      </div>
      <div className='list-div'>
        <h2>🔧 Services</h2>
        <ul className="fancy-list">
          <li>
            Custom Web Design Modern, responsive websites built to reflect your
            brand and connect with your audience. I create clean, user-focused
            designs that look great on every device.
          </li>
          <li>
            Frontend Development Fast, interactive sites using HTML, CSS,
            JavaScript, and React. Whether it’s a simple landing page or a
            complex UI, I bring your vision to life with smooth animations,
            clean code, and performance in mind.
          </li>
          <li>
            Website Refresh & Optimization Already have a site, but it’s
            outdated, clunky, or slow? I’ll modernize it, improve speed and
            usability, and make it mobile-friendly — without starting from
            scratch.
          </li>
          <li>
            Collaborative Projects I work closely with a trusted team of
            developers, designers, and my creative partner Vale (branding +
            content), so you get the benefits of a full-stack studio — with the
            care and flexibility of a freelancer.
          </li>
          <li>
            Bilingual & International Need a site that speaks more than one
            language? I offer support for bilingual (English/Italian) content
            and international audience needs, perfect for tourism, education,
            and small businesses expanding globally.
          </li>
        </ul>
      </div>
      
    </div>
  );
}
