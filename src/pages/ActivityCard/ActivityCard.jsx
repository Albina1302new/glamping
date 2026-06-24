import { useState } from "react";
import styles from "./ActivityCard.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

function ActivityCard({ activity, likedActivities = [], toggleLiked }) {
  const [open, setOpen] = useState(false);

  const isLiked = likedActivities.find((item) => item._id == activity._id);

  return (
    <article className={styles.card}>
      <div className={styles.priceBox}>
        <h3>{activity.title}</h3>
      </div>

      <img src={activity.image} alt={activity.title} />

      <div className={styles.infoBox}>
        <button
          className={styles.heartBtn}
          onClick={() => toggleLiked(activity)}
        >
          {isLiked ? <FaHeart /> : <FaRegHeart />}
        </button>

        <p className={styles.time}>
          {activity.date}
          <br />
          Kl. {activity.time}
        </p>

        <button className={styles.readBtn} onClick={() => setOpen(!open)}>
          {open ? "Læs mindre" : "Læs mere"}
          {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </button>

        {open && <p className={styles.description}>{activity.description}</p>}
      </div>
    </article>
  );
}

export default ActivityCard;
