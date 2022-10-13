import classes from "./CreditCardFront.module.css";
import { useSelector } from "react-redux";

const CreditCardFront = () => {
  const { numberOnCard } = useSelector((state) => state.number);
  const { nameOnCard } = useSelector((state) => state.name);
  const { dateOnCard } = useSelector((state) => state.date);
  const { isFlipped } = useSelector((state) => state.cvv);

  return (
    <div
      className={`${classes.credit_card} ${isFlipped ? classes.flipped : ""}`}
    >
      {numberOnCard.startsWith("5") && (
        <span className={classes.logo}>
          <img src="/images/mastercard-logo.png" />
        </span>
      )}
      {numberOnCard.startsWith("4") && (
        <span className={classes.logo}>
          <img src="/images/visa-logo.png" />
        </span>
      )}
      <span className={classes.card_chip}>
        <img src="/images/card-chip.png" />
      </span>
      <span className={classes.name}>{nameOnCard || "Your full name"}</span>
      <span className={classes.date}>{dateOnCard || "Exp.date"}</span>
      <span className={classes.number}>
        {numberOnCard || "#### #### #### ####"}
      </span>
    </div>
  );
};

export default CreditCardFront;
