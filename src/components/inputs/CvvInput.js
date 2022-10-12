import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { cvvActions } from "../../store/cvv-slice";

import InputError from "../../UI/InputError";

const CvvInput = () => {
  const [showError, setShowError] = useState(false);
  const [erorrContent, setErrorContent] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    dispatch(cvvActions.cvvHandler(event.target.value));
  };

  const onBlurHandler = (event) => {
    dispatch(cvvActions.flipCardHandler(false));
    const cvv = event.target.value;
    setShowError(true);
    if (cvv.trim().length === 0) {
      setErrorContent("This field cannot be empty!");
    } else {
      setShowError(false);
    }
  };

  const onFocusHandler = () => {
    dispatch(cvvActions.flipCardHandler(true));
    setShowError(false);
  };

  return (
    <Fragment>
      <div>
        <label htmlFor="cvv-on-card"></label>
        <input
          type="number"
          maxLength="3"
          id="cvv-on-card"
          placeholder="CVV/CVC"
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
      </div>
      {showError && <InputError content={erorrContent} />}
    </Fragment>
  );
};

export default CvvInput;
