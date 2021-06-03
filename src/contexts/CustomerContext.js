import { createContext, useState } from "react";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";

export const CustomerContext = createContext();

const data = [
  {
    id: uuidv4(),
    title: "Zeynep Özay",
    type: "sahis",
    address: "Maltepe",
    gsm: "0536345559",
    email: "dd@ddd.com",
    info: "password",
    website: "aa.com",
    tckn: "13600100050",
    firm: "ServisSoft",
    note: "note",
    file: [
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    ],
  },
];

const CustomerContextProvider = (props) => {
  const [customers, setCustomers] = useState(data);

  const handleDelete = (id) => {
    setCustomers([...customers.filter((item) => item.id !== id)]);
  };

  const addCustomer = (newCustomer = {}) => {
    setCustomers([...customers, newCustomer]);
  };

  const history = useHistory();



  const updateCustomer = (customer) => {
    var index = customers.findIndex((x) => x.id === customer.id);

    setCustomers([
      ...customers.slice(0, index),
      Object.assign({}, customers[index], customer),
      ...customers.slice(index + 1),
    ]);
    history.push(`/`);
  };

  return (
    <CustomerContext.Provider
      value={{ customers, addCustomer, handleDelete, updateCustomer }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
