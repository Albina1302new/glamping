import styles from "./Ophold.module.css";
import { useStays } from "../../hooks/useStays";
import { Link } from "react-router-dom";

function Ophold() {
  const stays = useStays();

  return (
    <>
      <section className={styles.heroOphold}>
        <h1>Vores Ophold</h1>
      </section>

      <section className={styles.ophold}>
        <h3>Vi har ophold til enhver smag</h3>
        <p>
          Vores glampingophold er skabt til at tilbyde en kombination af eventyr
          og afslapning. Det er den ideelle flugt fra byens støj og stress, og
          det perfekte sted at genoplade batterierne i en naturskøn indstilling.
          Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen
          og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en
          oplevelse fyldt med komfort, eventyr og skønhed.
        </p>
      </section>

      <section className={styles.cards}>
        {stays.map((stay) => (
          <article key={stay._id} className={styles.card}>
            <div className={styles.priceBox}>
              <h3>{stay.title}</h3>
              <p>{stay.numberOfPersons} personer</p>
              <p>Fra {stay.price},-</p>
            </div>

            <img src={stay.image} alt={stay.title} />

            <Link to={`/stayview/${stay._id}`} className={styles.infoBtn}>
              Læs mere
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}

export default Ophold;
