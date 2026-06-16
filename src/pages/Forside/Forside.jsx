import Header from "../../components/Navigation/Header";
import Reviews from "../Reviews/Reviews";
import styles from "./Forside.module.css"

function Forside(){

    return (
      <>
        <Header />
        <section className={styles.heroForside}>
          <img className={styles.logoForside} src="/glamping/logo/logo.png" />

          <h2>Gittes </h2>
          <h1>Glamping</h1>

          <button className={styles.heroBtn}>Book nu</button>
        </section>
        <section className={styles.intro}>
          <h3>Kom og prøv glamping hos Gitte!</h3>
          <p>
            Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor
            hjertevarme og omsorg møder naturens skønhed og eventyr. Vores
            dedikerede team, anført af Gitte selv, er her for at skabe den
            perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter
            at skabe minder og fordybelse, uanset om du besøger os som par,
            familie eller soloeventyrer. Vi tilbyder en bred vifte af
            aktiviteter og arrangementer, der passer til alle aldre og
            interesser. Udforsk naturen, slap af ved bålet, del historier med
            nye venner, eller find indre ro med vores wellnessaktiviteter.
          </p>
          <div className={styles.circle}>
            <img src="/glamping/heros/gitte.jpg" alt="Gitte" />
          </div>
          <button className={styles.gBtn}>Se Vores Ophold</button>
        </section>
        <Reviews/>
      </>
    );
}

export default Forside