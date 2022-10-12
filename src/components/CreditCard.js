import { useSelector } from "react-redux";

import classes from "./CreditCard.module.css";

const CreditCard = () => {
  const { numberOnCard } = useSelector((state) => state.number);
  const { nameOnCard } = useSelector((state) => state.name);
  const { dateOnCard } = useSelector((state) => state.date);
  const { cvvOnCard } = useSelector((state) => state.cvv);
  const { isFlipped } = useSelector((state) => state.cvv);
  return (
    <div className={classes.card_wrapper}>
      <div className={isFlipped ? classes.flipped : classes.not_flipped}>
        <div className={classes.front}>
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
        <div className={classes.back}>
          <div className={classes.magnetic_strip}></div>
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
