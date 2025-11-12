import {useController, type UseControllerProps} from "react-hook-form";

export interface InputProps extends UseControllerProps {
    label: string,
}

export const Input=(props: InputProps) => {
    const {field, fieldState}=useController({
        name: props.name,
        control: props.control,
        rules: props.rules,
    });
    return (
        <>
            <label htmlFor={props.label}>{props.name}</label>
            <input id={props.name} {...field} value={field.value} type="text" maxLength={100} minLength={10}></input>
            {fieldState.error&&
                <p>{fieldState.error.message}</p>
            }
        </>
    )
}