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
              Ophold
            </Link>
            <Link to="/activities" onClick={() => setOpen(false)}>
              Aktiviteter
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Kontakt
            </Link>
            <Link to="/wishlist" onClick={() => setOpen(false)}>
              Min liste
            </Link>
            
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
