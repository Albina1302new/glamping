import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import styles from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoBox}>
        <img src="/glamping/logo/logo.png" alt="Gittes Glamping" />
      </Link>

      <button className={styles.burger} onClick={() => setOpen(true)}>
        <HiOutlineBars3 />
      </button>

      {open && (
        <div className={styles.overlay}>
          <nav className={styles.mobileMenu}>
            <button className={styles.closeBtn} onClick={() => setOpen(false)}>
              <IoClose />
            </button>

            <Link to="/stays" onClick={() => setOpen(false)}>
              <h3>Ophold</h3>
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <h3>Kontakt</h3>
            </Link>
            <Link to="/activities" onClick={() => setOpen(false)}>
             <h3> Aktiviteter</h3>
            </Link>
            <Link to="/min-liste" onClick={() => setOpen(false)}>
             <h3> Min liste</h3>
            </Link>
            
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
