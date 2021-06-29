import { useHistory } from "react-router-dom";

export function Header({ cartItems }) {
  let history = useHistory();
  return (
    <nav className="navbar navbar-dark site-bg-primary">
      <div className="d-flex w-100">
        <div className="text-light text-center h3 w-100">
          <div
            onClick={() => history.push("/")}
            className={"site-title pointer"}
          >
            Foodie Junction
          </div>
        </div>
        <div className="text-light d-flex align-items-center pointer">
          <div onClick={() => history.push("/cart")}>
            <i className="material-icons cart-icon">shopping_cart</i>
          </div>
          <div className="d-flex align-items-center">
            <span className="ml-2 cart-text">{cartItems.length}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
