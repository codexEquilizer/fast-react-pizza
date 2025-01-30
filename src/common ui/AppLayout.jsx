import { Outlet, useNavigation } from "react-router-dom";

import Headers from "./Headers";
import CartOverview from "../features/cart/CartOverview";
import LoadIndicator from "./LoadIndicator";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <LoadIndicator />}
      <Headers />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
