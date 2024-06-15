import "./Customers.scss";
import greeting from "../../assets/greeting.png";
import CustomersList from "../CustomersList/CustomersList";
const Customers = () => {
  return (
    <div className="customers">
      <div className="customers__title">
        Hello Elano <img src={greeting} alt="icon" />,
      </div>
      <CustomersList />
    </div>
  );
};
export default Customers;
