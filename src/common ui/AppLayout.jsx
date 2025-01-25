import { Outlet } from "react-router-dom";

import Headers from "./Headers";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  return (
    <div>
      <Headers />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
