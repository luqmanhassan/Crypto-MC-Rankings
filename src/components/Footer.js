import email from './images/email.svg';
import faqs from './images/faqs.svg';
import twitter from './images/twitter.svg';

function Footer() {
  return (
    <footer className="container mx-auto flex justify-center p-5">
      <img src={twitter} alt="Twitter" className="w-20" />
      <img src={faqs} alt="Faqs" className="w-20" />
      <img src={email} alt="Email" className="w-20" />
    </footer>
  );
}

export default Footer;
