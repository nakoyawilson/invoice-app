import "./InvoiceSummary.css";

const InvoiceSummary = ({ id, paymentDue, total, clientName, status }) => {
  const dueDate = new Date(paymentDue.replace(/-/g, "/"))
    .toDateString()
    .split(" ");

  return (
    <ul className="summary">
      <li className="invoice-id">
        #<span className="id-value">{id}</span>
      </li>
      <li className="payment-due-date">
        Due {`${dueDate[2]} ${dueDate[1]} ${dueDate[3]}`}
      </li>
      <li className="payment-total">&pound;{Number(total).toFixed(2)}</li>
      <li className="client-name">{clientName}</li>
      <li
        className={`payment-status ${
          status.toLowerCase() === "paid"
            ? "paid"
            : status.toLowerCase() === "pending"
            ? "pending"
            : "draft"
        }`}
      >
        <span className="status-text">{`${status
          .charAt(0)
          .toUpperCase()}${status.slice(1)}`}</span>
      </li>
    </ul>
  );
};

export default InvoiceSummary;
