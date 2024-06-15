import CustomersHeader from "../CustomersHeader/CustomersHeader";
import CustomersItem from "../CustomersItem/CustomersItem";
import "./CustomersList.scss";
import { useState, useEffect } from "react";
const CustomersList = () => {
  return (
    <div className="customersList">
      <CustomersHeader />
      <CustomersItem />
    </div>
  );
};
export default CustomersList;
