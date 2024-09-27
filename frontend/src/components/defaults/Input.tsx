import {ChangeEventHandler} from "react";
import './input.css';

function Input(props: {name: string, type: string, placeholder: string, label: string}) {
    return (
        <div className="input">
            {
                (props.type === "submit") ? (
                    <input id={props.name} type={props.type} name={props.name} value={props.placeholder}/>) : (
                    <>
                        <label htmlFor={props.name}>
                            {props.label}
                        </label>
                        <input id={props.name} type={props.type} name={props.name}
                                   placeholder={props.placeholder}/>
                    </>
    )

}
</div>
)
}

export default Input;