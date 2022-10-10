import InputError from "../UI/InputError";
import classes from "./PaymentForm.module.css";
import NameInput from "./inputs/NameInput";
import CardNumberInput from "./inputs/CardNumberInput";

const PaymentForm = () => {
  const formatDate = (value) =>
    value
      .replace(/[\/]/g, "")
      .match(/.{1,2}/g)
      ?.join("/")
      .substr(0, 5) || "";

  return (
    <div className={classes.form_wrapper}>
      <div>
        <input type="radio" checked />
        <label>Credit Card</label>
      </div>
      <div className={classes.input_wrapper}>
        <NameInput />
        <CardNumberInput />

        <div className="row justify-content-between pb-2">
          <div className="col-8">
            <input
              className={classes.input}
              type="text"
              placeholder="Exp. Date (MM / YY)"
              maxLength="5"
              onChange={(event) => {
                console.log(event.target.value);
                const { value } = event.target;
                event.target.value = formatDate(value);
              }}
            />
          </div>
          <div className="col-4">
            <input
              className={classes.input}
              id="cvv"
              type="text"
              placeholder="CVV/CVC"
              maxLength="3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
