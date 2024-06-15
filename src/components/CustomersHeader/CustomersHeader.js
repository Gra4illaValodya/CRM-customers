import "./CustomersHeader.scss";
import search from "../../assets/search.png";
const CustomersHeader = () => {
  return (
    <div className="customersHeader__header">
      <div className="customersHeader__title-wrapper">
        <div className="customersHeader__title">All Customers</div>
        <div className="customersHeader__sub-title">Active Members</div>
      </div>
      <div className="customersHeader__search">
        <img className="customersHeader__search-icon" src={search} />
        <input
          className="customersHeader__search-input"
          type="search"
          placeholder={`Search`}
        />
      </div>
    </div>
  );
};
export default CustomersHeader;
