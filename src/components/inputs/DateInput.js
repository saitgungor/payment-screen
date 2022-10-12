import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { dateActions } from "../../store/date-slice";
import InputError from "../../UI/InputError";

const DateInput = () => {
  const [showError, setShowError] = useState(false);
  const [erorrContent, setErrorContent] = useState("");
  const dispatch = useDispatch();

  const formatDate = (value) =>
    value
      .replace(/[\/]/g, "")
      .match(/.{1,2}/g)
      ?.join("/")
      .substr(0, 5) || "";

  const onChangeHandler = (event) => {
    const { value } = event.target;
    event.target.value = formatDate(value);
    dispatch(dateActions.dateHandler(event.target.value));
  };

  const onBlurHandler = (event) => {
    const currentYear = new Date().getFullYear();
    const enteredDate = event.target.value;
    const [enteredMonth, enteredYear] = enteredDate.split("/");
    setShowError(true);
    if (enteredDate.trim().length === 0) {
      setErrorContent("This field cannot be empty!");
    } else if (
      enteredDate.trim().length !== 0 &&
      +enteredYear < +currentYear.toString().split("").splice(2, 3).join("")
    ) {
      setErrorContent("Please enter a valid year");
    } else if (
      (enteredDate.trim().length !== 0 && +enteredMonth > 12) ||
      +enteredDate < 0
    ) {
      setErrorContent("Please enter a valid month");
    } else {
      setShowError(false);
    }
  };

  const onFocusHandler = () => {
    setShowError(false);
  };

  return (
    <Fragment>
      <div>
        <label htmlFor="card-date"></label>
        <input
          type="text"
          id="card-date"
          placeholder="Card date"
          maxLength="23"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        />
      </div>
      {showError && <InputError content={erorrContent} />}
    </Fragment>
  );
};

export default DateInput;
