import key from "../../assets/key.png";
import square from "../../assets/3d.png";
import newUser from "../../assets/newUser.png";
import wallet from "../../assets/wallet2.png";
import discount from "../../assets/discount.png";
import question from "../../assets/question.png";

import NavItem from "../NavItem/NavItem";
import "./NavElementList.scss";
const NavElementList = () => {
  const data = [
    { id: 1, title: "Dashboard", logo: key },
    { id: 2, title: "Product", logo: square },
    { id: 3, title: "Customers", logo: newUser },
    { id: 4, title: "Income", logo: wallet },
    { id: 5, title: "Promote", logo: discount },
    { id: 6, title: "Help", logo: question },
  ];
  return (
    <div className="nav-list">
      <NavItem data={data} />
    </div>
  );
};
export default NavElementList;
