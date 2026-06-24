import styles from "./MinListe.module.css";
import ActivityCard from "../ActivityCard/ActivityCard";

function MinListe({ likedActivities = [], toggleLiked }) {
  return (
    <>
      <section className={styles.heroMinListe}>
        <h1>Min liste</h1>
      </section>

      <section className={styles.countBox}>
        <h2>Antal aktiviteter på listen:</h2>
        <h3>{likedActivities.length}</h3>
      </section>

      {likedActivities.length === 0 ? (
        <p className={styles.empty}>Du har ingen aktiviteter endnu.</p>
      ) : (
        <section className={styles.cards}>
          {likedActivities.map((activity) => (
            <ActivityCard
              key={activity._id}
              activity={activity}
              likedActivities={likedActivities}
              toggleLiked={toggleLiked}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default MinListe;
