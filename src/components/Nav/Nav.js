import NavHeader from "../NavHeader/NavHeader";
import NavElementList from "../NavElementList/NavElementList";
import User from "../User/User";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavHeader />
        <NavElementList />
      </div>
      <User />
    </nav>
  );
};
export default Nav;
