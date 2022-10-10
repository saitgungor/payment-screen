import { useSelector } from "react-redux";

import classes from "./CreditCard.module.css";

const CreditCard = () => {
  const { numberOnCard } = useSelector((state) => state.number);
  return (
    <div className={classes.card_wrapper}>
      <div className={classes.credit_card}>
        {/* <span className={classes.logo}>
          <img src="/images/mastercard-logo.png" />
        </span> */}
        <span className={classes.logo}>
          <img src="/images/visa-logo.png" />
        </span>
        <span className={classes.card_chip}>
          <img src="/images/card-chip.png" />
        </span>
        <span className={classes.name}>Your full name</span>
        <span className={classes.date}>Exp. date</span>
        <span className={classes.number}>
          {numberOnCard || "#### #### #### ####"}
        </span>
      </div>
    </div>
  );
};
export default CreditCard;
