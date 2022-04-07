import { useOutletContext } from "react-router-dom";
import InvoiceSummary from "../components/InvoiceSummary";
import plusIcon from "../assets/icon-plus.svg";
import "./home.css";

const Home = () => {
  const [invoices, invoiceCount] = useOutletContext();
  const breakPoint = 376;

  const displayInvoiceSummary = (invoice) => {
    return (
      <InvoiceSummary
        key={invoice._id}
        id={invoice._id}
        paymentDue={invoice.paymentDue}
        total={invoice.total}
        clientName={invoice.clientName}
        status={invoice.status}
      />
    );
  };

  return (
    <>
      <div className="container">
        <div>
          <h1 className="main-heading">Invoices</h1>
          <h2 className="invoice-count">
            {invoiceCount === 0
              ? "No invoices"
              : invoiceCount === 1 && window.innerWidth > breakPoint
              ? "There is 1 invoice"
              : invoiceCount === 1
              ? "1 invoice"
              : invoiceCount > 1 && window.innerWidth > breakPoint
              ? `There are ${invoiceCount} total invoices`
              : `${invoiceCount} invoices`}
          </h2>
        </div>
        <div className="actions-container">
          <form>
            <label htmlFor="invoice-status" className="visually-hidden">
              Filter by status
            </label>
            <select name="status" id="invoice-status">
              <option value="">Filter by status</option>
              <option value="draft">Draft</option>
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
            </select>
          </form>
          <button className="add-new-invoice">
            <span className="plus-icon-wrapper">
              <img src={plusIcon} alt="" />
            </span>
            New
            {window.innerWidth > breakPoint && " Invoice"}
          </button>
        </div>
      </div>
      {!invoiceCount && (
        <>
          <h2 className="subheading">There is nothing here</h2>
          <p className="paragraph">
            Create an invoice by clicking the{" "}
            <span className="emphasized-text">
              New{window.innerWidth > breakPoint && " Invoice"}
            </span>{" "}
            button and get started
          </p>
        </>
      )}
      {invoices && (
        <div className="invoices-container">
          {invoices.map(displayInvoiceSummary)}
        </div>
      )}
      {/* Create new invoice form */}
      {/* Go back New Invoice Bill From Street Address City Post Code Country Bill
      To Client's Name Client's Email e.g. email@example.com Street Address City
      Post Code Country Invoice Date Payment Terms Net 1 day Net 7 days Net 14
      days Net 30 days Project Description e.g. Graphic Design Service Item List
      Item Name Qty. Price Total Add New Item Discard Save as Draft Save & Send */}
      {/* Create new invoice end */}
    </>
  );
};

export default Home;
