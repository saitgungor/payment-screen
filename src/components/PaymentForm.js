import InputError from "../UI/InputError";
import classes from "./PaymentForm.module.css";
import NameInput from "./inputs/NameInput";
import CardNumberInput from "./inputs/CardNumberInput";
import DateInput from "./inputs/DateInput";
import CvvInput from "./inputs/CvvInput";

const PaymentForm = () => {
  return (
    <div className={classes.form_wrapper}>
      <div>
        <input type="radio" readOnly checked />
        <label>Credit Card</label>
      </div>
      <div className={classes.input_wrapper}>
        <NameInput />
        <CardNumberInput />
        <DateInput />
        <CvvInput />
      </div>
    </div>
  );
};

export default PaymentForm;
