import styles from "./Kontakt.module.css";
import { useState } from "react";

function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        },
      );

      if (!response.ok) {
        throw new Error("Noget gik galt");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section className={styles.thankYou}>
        <p>
          Hej {name},
          <br />
          Tak for din besked!
          <br />
          Du hører fra os snarest.
        </p>

        <button className={styles.backBtn} onClick={() => setSubmitted(false)}>
          Tilbage
        </button>
      </section>
    );
  }

  return (
    <>
      <section className={styles.heroKontakt}>
        <h1>Kontakt Gitte</h1>
      </section>

      <section className={styles.kontakt}>
        <h2>
          Vil du booke et ophold?
          <br />
          Eller har du blot et spørgsmål?
        </h2>

        <p>Skriv til os — vi vender tilbage hurtigst muligt.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Navn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Skriv din besked her..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          {error && <p className={styles.error}>{error}</p>}

          <button className={styles.submitBtn} type="submit" disabled={loading}>
            {loading ? "Sender..." : "Indsend"}
          </button>
        </form>
      </section>
    </>
  );
}

export default Kontakt;
