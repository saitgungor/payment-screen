import classes from "./PaymentContainer.module.css";

const PaymentContainer = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h2>Payment</h2>
      </div>
      {props.children}
    </div>
  );
};
export default PaymentContainer;
