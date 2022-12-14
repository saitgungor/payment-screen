import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { nameActions } from "../../store/name-slice";

import InputError from "../../UI/InputError";

const NameInput = () => {
  const [showError, setShowError] = useState(false);
  const [erorrContent, setErrorContent] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    dispatch(nameActions.nameHandler(event.target.value));
  };

  const onBlurHandler = (event) => {
    const name = event.target.value;
    setShowError(true);
    if (name.trim().length === 0) {
      setErrorContent("This field cannot be empty!");
    } else if (
      name.split(" ").length === 1 ||
      name.split(" ").some((str) => str === "")
    ) {
      setErrorContent("Please enter your full name!");
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
        <label htmlFor="name-on-card"></label>
        <input
          type="text"
          id="name-on-card"
          pattern="^[a-zA-Z]+$"
          placeholder="Name on card"
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
      </div>
      {showError && <InputError content={erorrContent} />}
    </Fragment>
  );
};

export default NameInput;
