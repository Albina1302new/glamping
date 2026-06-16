import styles from "./Review.module.css";
import { useReviews } from "../../hooks/useReviews";

function Reviews() {
  const { reviews, loading } = useReviews();
 

  if (loading) return <p>Henter anmeldelser...</p>;

  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>Vores gæster udtaler</h2>

     <div className={styles.cards} >
          {reviews.map((review) => (
            <article key={review._id} className={styles.card}>
              <h3>
                {review.name}, {review.age} år
              </h3>
    
              <h4>{review.stay}</h4>
    
              <p>{review.review}</p>
            </article>
      ))}
      </div>
    </section>
  );
}

export default Reviews;
