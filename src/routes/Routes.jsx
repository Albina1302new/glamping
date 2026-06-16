import { useRoutes } from "react-router-dom";
import Forside from "../pages/Forside/Forside";
import Ophold from "../pages/Ophold/Ophold";
import EnkelvisningOphold from "../pages/EnkelvisningOphold/EnkelvisningOphold";

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Forside />,
    },
    {
      path: "/stays",
      element: <Ophold />,
    },
    {
      path: "/stayview/:id",
      element: <EnkelvisningOphold />,
    },
  ]);
}

export default Routes;
