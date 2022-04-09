import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [darkmodeOn, setDarkmodeOn] = useState(false);
  const [invoices, setInvoices] = useState(null);
  const [invoiceCount, setInvoiceCount] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const toggleDarkmode = () => {
    setDarkmodeOn(!darkmodeOn);
  };

  useEffect(() => {
    document.body.classList = darkmodeOn ? "dark-mode" : "light-mode";
  }, [darkmodeOn]);

  const fetchInvoices = async () => {
    setIsPending(true);
    const { data } = await axios.get("/invoices");
    setInvoices(data);
    setInvoiceCount(data.length);
    setIsPending(false);
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <>
      <Header
        theme={darkmodeOn ? "dark-mode" : "light-mode"}
        toggleDarkmode={toggleDarkmode}
      />
      <Outlet context={[invoices, invoiceCount, isPending]} />
    </>
  );
};

export default App;
