import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Navigation/Header";
import Routes from "./routes/Routes";

function App() {
  const [likedActivities, setLikedActivities] = useState(() => {
    const saved = localStorage.getItem("likedActivities");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("likedActivities", JSON.stringify(likedActivities));
  }, [likedActivities]);

  function toggleLiked(activity) {
    setLikedActivities((prevLiked) => {
      const isLiked = prevLiked.find((item) => item._id === activity._id);

      if (isLiked) {
        return prevLiked.filter((item) => item._id !== activity._id);
      }

      return [...prevLiked, activity];
    });
  }

  return (
    <>
      <Header />

      <Routes likedActivities={likedActivities} toggleLiked={toggleLiked} />

      <Footer />
    </>
  );
}

export default App;
