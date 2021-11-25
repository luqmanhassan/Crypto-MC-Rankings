import email from './images/email.svg';
import faqs from './images/faqs.svg';
import twitter from './images/twitter.svg';

function Footer() {
  return (
    <footer>
      <img src={twitter} alt="Twitter" />
      <img src={faqs} alt="Faqs" />
      <img src={email} alt="Email" />
    </footer>
  );
}

export default Footer;
