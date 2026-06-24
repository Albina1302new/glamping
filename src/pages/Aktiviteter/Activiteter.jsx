import styles from "./Activiteter.module.css";
import ActivitiesList from "../ActivitiesList/ActivitiesList";

function Activiteter({ likedActivities, toggleLiked }) {
  return (
    <>
      <section className={styles.heroActiviteter}>
        <h1>Aktiviteter</h1>
      </section>

      <section className={styles.activiteter}>
        <h3>Ingen skal kede sig hos Gitte</h3>
        <p>
          Naturen omkring Gittes Glamping byder på mange hyggelige aktiviteter.
          Her kan du både finde ro, oplevelser og fællesskab.
        </p>
      </section>

      <ActivitiesList
        likedActivities={likedActivities}
        toggleLiked={toggleLiked}
      />
    </>
  );
}

export default Activiteter;
