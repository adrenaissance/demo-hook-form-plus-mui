import {useEffect} from "react";
import {useFieldArray, useFormContext, type UseFieldArrayProps} from "react-hook-form"

export interface FieldArrayProps extends UseFieldArrayProps {
    label?: string
}

export const FieldArray=(props: FieldArrayProps) => {
    const {name, label="Custom Reference"}=props;
    const {register, formState: {errors}, control, trigger}=useFormContext();
    const {fields}=useFieldArray({
        name,
        control
    });
    const handleFieldOnBlur=() => {
        trigger(name);
    }

    return (
        <div className="grid grid-rows-3 gap-2">
            {fields.map((field, index) => (
                <div className="grid grid-cols-2 gap-2" key={field.id}>
                    <label htmlFor={field.id}>{`${name}`.concat(index===0? '':` (${index})`)}</label>
                    <input className="border border-2" id={field.id} {...register(`${name}.${index}.value`)} onBlur={handleFieldOnBlur} />
                    <p style={{color: "red"}}>
                        {errors[name]?.[index]&&`${label} ${errors[name]?.[index]?.value?.message}`}
                    </p>
                </div>
            ))}

            {/* array-level error */}
            {errors[name]?.message&&(
                <p style={{color: "red"}}>{errors[name].message}</p>
            )}
        </div>
    );
}