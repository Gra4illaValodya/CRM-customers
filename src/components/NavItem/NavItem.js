import "./NavItem.scss";
import chevron from "../../assets/chevron-right.png";
import { useState } from "react";
const NavItem = ({ data }) => {
  const [active, setActive] = useState(null);

  const elements = () => {
    return data.map((element, idx) => {
      const isActive = (id) => {
        setActive(id);
      };
      const activeItem = active === element.id;
      console.log(activeItem);
      return (
        <div
          className={`nav-item ${activeItem ? "active" : ""}`}
          key={element.id}
          onClick={() => isActive(element.id)}
        >
          <div className="nav-item__logo">
            <img src={element.logo} />
          </div>
          <div className="nav-item__wrapper">
            <div className="nav-item__title">{element.title}</div>
            <div className="nav-item__arrow">
              <img src={chevron} />
            </div>
          </div>
        </div>
      );
    });
  };
  return <div>{elements()}</div>;
};
export default NavItem;
