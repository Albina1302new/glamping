import { useRoutes } from "react-router-dom";
import Forside from "../pages/Forside/Forside";
import Ophold from "../pages/Ophold/Ophold";
import EnkelvisningOphold from "../pages/EnkelvisningOphold/EnkelvisningOphold";
import Aktiviteter from "../pages/Aktiviteter/Activiteter";
import Kontakt from "../pages/Kontakt/Kontakt";
import MinListe from "../pages/MinListe/MinListe";

function Routes({ likedActivities, toggleLiked }) {
  return useRoutes([
    { path: "/", element: <Forside /> },
    { path: "/stays", element: <Ophold /> },
    { path: "/stayview/:id", element: <EnkelvisningOphold /> },

    {
      path: "/activities",
      element: (
        <Aktiviteter
          likedActivities={likedActivities}
          toggleLiked={toggleLiked}
        />
      ),
    },

    {
      path: "/min-liste",
      element: (
        <MinListe likedActivities={likedActivities} toggleLiked={toggleLiked} />
      ),
    },

    { path: "/contact", element: <Kontakt /> },
  ]);
}

export default Routes;
