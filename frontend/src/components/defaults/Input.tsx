import "./input.css";

type CallbackFunction = () => void;

function Input(props: {
  name?: string;
  type: string;
  placeholder?: string;
  label: string;
  onChange?: CallbackFunction;
  value?: string
  disabled?: boolean
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
