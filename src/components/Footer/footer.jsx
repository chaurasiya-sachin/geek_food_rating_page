import styles from "./footer.module.css";
import FooterLogo from '../../assets/footerlog.svg';
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerdiv}>
        <div className={styles.logobox}>
        <img src={FooterLogo} alt="Footer Logo" />
        </div>
        <div className={styles.para}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
        </div>
        <ul className={styles.list}>
          <li>About</li>
          <li>Careers</li>
          <li>History</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
        <div className={styles.icon}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-dribbble"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
