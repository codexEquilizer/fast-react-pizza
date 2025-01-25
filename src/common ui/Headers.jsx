import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Headers() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />

      <p>Sourav</p>
    </header>
  );
}

export default Headers;
