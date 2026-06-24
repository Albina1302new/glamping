import { useParams, Link } from "react-router-dom";
import { useStays } from "../../hooks/useStays";
import styles from "./EnkelvisningOphold.module.css";

function EnkelvisningOphold() {
  const { id } = useParams();
  const stays = useStays();

  const stay = stays.find((s) => s._id === id);

  if (!stay) return <p>Henter ophold...</p>;

  return (
    <section className={styles.singleStay}>
      <div
        className={styles.heroImage}
        style={{ backgroundImage: `url(${stay.image})` }}
      />

      <div className={styles.content}>
        <h1>{stay.title}</h1>

        <p>{stay.description}</p>

        <div className={styles.info}>
          <p>{stay.numberOfPersons} personer</p>
          <p className={styles.price}>Fra {stay.price},-</p>
        </div>

        <Link to="/contact" className={styles.bookBtn}>
          Book nu
        </Link>
      </div>
    </section>
  );
}

export default EnkelvisningOphold;
