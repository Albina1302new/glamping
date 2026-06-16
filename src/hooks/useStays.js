import { useEffect, useState } from "react";

export function useStays() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    fetch("https://glamping-rqu9j.ondigitalocean.app/stays/")
      .then((res) => res.json())
      .then((data) => setStays(data.data));
  }, []);

  return stays;
}
