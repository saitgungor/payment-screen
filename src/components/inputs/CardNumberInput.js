import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { numberActions } from "../../store/number-slice";
import InputError from "../../UI/InputError";

const CardNumberInput = () => {
  const [showError, setShowError] = useState(false);
  const [erorrContent, setErrorContent] = useState("");
  const dispatch = useDispatch();

  const formatCardNumber = (value) =>
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || "";

  const onChangeHandler = (event) => {
    const { value } = event.target;
    event.target.value = formatCardNumber(value);
    dispatch(numberActions.numberHandler(event.target.value));
  };

  const onBlurHandler = (event) => {
    setShowError(true);
    if (event.target.value.trim().length === 0) {
      setErrorContent("This field cannot be empty!");
      console.log("1", event.target.value.trim().length);
    } else if (event.target.value.trim().length < 19) {
      setErrorContent("Please enter a valid card number");
      console.log("2", event.target.value.trim().length);
    } else {
      setShowError(false);
      console.log("3", event.target.value.trim().length);
    }
  };

  const onFocusHandler = () => {
    setShowError(false);
  };

  return (
    <Fragment>
      <div>
        <label htmlFor="card-number" id="card-number"></label>
        <input
          type="text"
          placeholder="Card Number"
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

export default CardNumberInput;
