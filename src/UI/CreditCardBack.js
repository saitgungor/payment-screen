import classes from "./CreditCardBack.module.css";
import { useSelector } from "react-redux";

const CreditCardBack = () => {
  const { isFlipped, cvvOnCard } = useSelector((state) => state.cvv);
  return (
    <div
      className={`${classes.credit_card} ${!isFlipped ? classes.flipped : ""} `}
    >
      <div className={classes.magnetic_strip}></div>
      <div className={classes.cvv_line}>
        <span>{cvvOnCard}</span>
      </div>
    </div>
  );
};

export default CreditCardBack;
