import { useEffect, useState } from "react";

export function useReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchReviews() {
    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/reviews",
      );

      const result = await response.json();

      setReviews(result.data);
    } catch (error) {
      console.error("Noget gik galt", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  return { reviews, loading };
}
