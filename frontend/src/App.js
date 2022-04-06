import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [darkmodeOn, setDarkmodeOn] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [invoiceCount, setInvoiceCount] = useState(0);

  const toggleDarkmode = () => {
    setDarkmodeOn(!darkmodeOn);
  };

  const increaseInvoiceCount = () => {
    setInvoiceCount(invoiceCount + 1);
  };

  const decreaseInvoiceCount = () => {
    setInvoiceCount(invoiceCount - 1);
  };

  useEffect(() => {
    document.body.classList = darkmodeOn ? "dark-mode" : "light-mode";
  }, [darkmodeOn]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const { data } = await axios.get("/invoices");
      setInvoices(data);
      setInvoiceCount(data.length);
    };
    fetchInvoices();
  }, []);

  return (
    <>
      <Header
        theme={darkmodeOn ? "dark-mode" : "light-mode"}
        toggleDarkmode={toggleDarkmode}
      />
      <Outlet
        context={[
          invoices,
          invoiceCount,
          increaseInvoiceCount,
          decreaseInvoiceCount,
        ]}
      />
    </>
  );
};

export default App;
