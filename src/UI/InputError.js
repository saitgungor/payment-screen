import classes from "./InputError.module.css";

const InputError = (props) => {
  return <div className={classes.input_error}>{props.content}</div>;
};
export default InputError;
