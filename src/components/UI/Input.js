import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={classes.input}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
