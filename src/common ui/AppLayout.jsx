import { Outlet, useNavigation } from "react-router-dom";

import Headers from "./Headers";
import CartOverview from "../features/cart/CartOverview";
import LoadIndicator from "./LoadIndicator";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <LoadIndicator />}
      <Headers />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
