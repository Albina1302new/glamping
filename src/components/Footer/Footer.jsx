import styles from "./Footer.module.css"
import { Link } from "react-router-dom";
import { PiInstagramLogoFill } from "react-icons/pi";
import { ImFacebook2 } from "react-icons/im";

function Footer(){
    return (
      <footer className={styles.footer}>
        <div className={styles.socials}>
          <a
            className={styles.iconsFooteri}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <PiInstagramLogoFill />
          </a>

          <a
            className={styles.iconsFooter}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <ImFacebook2 />
          </a>
        </div>

        <div className={styles.brand}>
          <Link to="/" className={styles.logoLink}>
            <img src="/glamping/logo/logo.png" alt="Gittes Glamping" />
          </Link>
          <span>Gittes Glamping</span>
        </div>
      </footer>
    );
}

export default Footer