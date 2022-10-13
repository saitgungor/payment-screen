import classes from "./CreditCard.module.css";
import CreditCardFront from "../UI/CreditCardFront";
import CreditCardBack from "../UI/CreditCardBack";

const CreditCard = () => {
  return (
    <div className={classes.card_wrapper}>
      <div className={classes.credit_card}>
        <CreditCardFront />
        <CreditCardBack />
      </div>
    </div>
  );
};
export default CreditCard;
