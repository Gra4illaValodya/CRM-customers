import "./NavHeader.scss";
import logo from "../../assets/setting1.svg";

const NavHeader = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="SVG IMAGE" className="nav__logo-svg" />
        <div className="nav__text-logo">Dashboard</div>
        <div className="nav__version">v.01</div>
      </div>
    </div>
  );
};
export default NavHeader;
