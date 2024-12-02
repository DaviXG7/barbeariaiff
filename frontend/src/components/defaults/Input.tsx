import "./input.css";
import {ChangeEventHandler} from "react";

function Input(props: {
  name?: string;
  type: string;
  placeholder?: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string
  disabled?: boolean
  accept?: string
}) {
  return (
    <div className="input">
      {props.type === "submit" ? (
        <input
          id={props.name}
          type={props.type}
          name={props.name}
          value={props.label}
        />
      ) : (
        <>
          <label htmlFor={props.name}>{props.label}</label>
          <input
            onChange={props.onChange}
            id={props.name}
            type={props.type}
            name={props.name}
            accept={props.accept}
            value={props.value}
            disabled={props.disabled}
            placeholder={props.placeholder}
          />
        </>
      )}
    </div>
  );
}

export default Input;
