import InputError from "../UI/InputError";
import classes from "./PaymentForm.module.css";

const PaymentForm = () => {
  return (
    <div className={classes.form_wrapper}>
      <div className="form-check pb-2">
        <input type="radio" checked />
        <label>Credit Card</label>
      </div>

      <div className={classes.name_input}>
        <input
          className={classes.input}
          id="name"
          type="text"
          placeholder="Name on card"
        />
      </div>
      <InputError />

      <div className="col-12 mb-2">
        <input
          className={classes.input}
          type="text"
          placeholder="Card Number"
          maxLength="16"
        />
      </div>

      <div className="row justify-content-between pb-2">
        <div className="col-8">
          <input
            className={classes.input}
            type="text"
            placeholder="Exp. Date (MM / YY)"
            maxLength="5"
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
  );
};

export default PaymentForm;
