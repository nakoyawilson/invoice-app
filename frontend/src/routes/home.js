import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [invoices, invoiceCount, increaseInvoiceCount, decreaseInvoiceCount] =
    useOutletContext();

  return (
    <>
      <h1>Invoices</h1>
      <p>
        {invoiceCount === 0
          ? "No invoices"
          : invoiceCount === 1
          ? "There is 1 invoice"
          : `There are ${invoiceCount} total invoices`}
      </p>
      <form>
        <label htmlFor="invoice-status">Filter by status</label>
        <select name="status" id="invoice-status">
          <option value="">Filter by status</option>
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
      </form>
      <button>New Invoice</button>
      {!invoiceCount && (
        <>
          <h2>There is nothing here</h2>
          <p>
            Create an invoice by clicking the <span>New Invoice</span> button
            and get started
          </p>
        </>
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
