import {TextField, type TextFieldProps} from "@mui/material";
import {useController, useFormContext} from "react-hook-form";

export type FormFieldProps=TextFieldProps&{
    name: string;
}

export const FormField=({name, ...rest}: FormFieldProps) => {
    const {control}=useFormContext();
    const {field}=useController({
        name,
        control,
    });

    return (
        <>
            <label htmlFor={name}>{name}</label>
            <TextField
                {...rest}
                {...field}
            />
        </>
    );
};
