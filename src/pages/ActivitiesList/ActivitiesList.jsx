import { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import styles from "./ActiviestList.module.css";

function ActivitiesList({ likedActivities, toggleLiked }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      const res = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/activities",
      );
      const result = await res.json();
      setActivities(result.data);
    }

    fetchActivities();
  }, []);

  return (
    <section className={styles.cards}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity._id}
          activity={activity}
          likedActivities={likedActivities}
          toggleLiked={toggleLiked}
        />
      ))}
    </section>
  );
}

export default ActivitiesList;
