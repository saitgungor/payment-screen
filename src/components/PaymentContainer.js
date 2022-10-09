import classes from "./PaymentContainer.module.css";

const PaymentContainer = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.payment_header}>
        <h2>Payment</h2>
      </div>
      <div className={classes.payment_body}>{props.children}</div>
    </div>
  );
};
export default PaymentContainer;
