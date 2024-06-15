import { useState, useEffect } from "react";
import "./CustomersItem.scss";
import Pagination from "../Pagination/Pagination";

const CustomersItem = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const info = [
    { id: 1, title: "Customer Name" },
    { id: 2, title: "Company" },
    { id: 3, title: "Phone Number" },
    { id: 4, title: "Email" },
    { id: 5, title: "Country" },
    { id: 6, title: "Status" },
  ];

  useEffect(() => {
    const fetchCustomersData = async () => {
      try {
        const response = await fetch("/customers.json");
        if (!response.ok) {
          throw new Error(
            `Ошибка при получении данных: ${response.statusText}`
          );
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("Полученные данные не являются JSON:", text);
          throw new Error("Полученные данные не являются JSON");
        }

        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        setError(error.message);
      }
    };

    fetchCustomersData();
  }, []);

  console.log(customers);
  const blockInfo = info.map((el) => (
    <div key={el.id} className="customersItem__info">
      {el.title}
    </div>
  ));
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentIndex = customers.slice(firstIndex, lastIndex);
  const customerItems = currentIndex.map((customer) => (
    <div key={customer._id} className="customersItem__customer">
      <div className="customersItem__customer-item">{customer.name}</div>
      <div className="customersItem__customer-item">{customer.company}</div>
      <div className="customersItem__customer-item">{customer.phone}</div>
      <div className="customersItem__customer-item">{customer.email}</div>
      <div className="customersItem__customer-item">{customer.country}</div>
      <div className="customersItem__customer-item">
        {customer.status ? "Active" : "Inactive"}
      </div>
    </div>
  ));

  return (
    <div className="customersItem">
      <div className="customersItem__headers">{blockInfo}</div>
      <div className="customersItem__list">{customerItems}</div>
      <div className="customersItem__wrapper">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={customers.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default CustomersItem;
