import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { numberActions } from "../../store/number-slice";
import InputError from "../../UI/InputError";
import { helper } from "../../helper/helper";

const CardNumberInput = () => {
  const [showError, setShowError] = useState(false);
  const [isBinAvailable, setBinAvailable] = useState(false);
  const [fetchContent, setFetchContent] = useState("");
  const [erorrContent, setErrorContent] = useState("");
  const dispatch = useDispatch();
  if (isBinAvailable) helper(fetchContent);

  const formatCardNumber = (value) =>
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || "";

  const onChangeHandler = (event) => {
    const { value } = event.target;
    const cardNumber = value.replaceAll(" ", "");
    if (cardNumber.length >= 6) {
      const bin = cardNumber.split("").splice(0, 6).join("");
      setBinAvailable(true);
      setFetchContent(bin);
    }
    event.target.value = formatCardNumber(value);
    dispatch(numberActions.numberHandler(event.target.value));
  };

  const onBlurHandler = (event) => {
    const number = event.target.value;
    setShowError(true);
    if (number.trim().length === 0) {
      setErrorContent("This field cannot be empty!");
    } else if (number.trim().length < 19) {
      setErrorContent("Please enter a valid card number");
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
        <label htmlFor="card-number"></label>
        <input
          type="text"
          placeholder="Card Number"
          maxLength="23"
          id="card-number"
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
