import {Autocomplete} from "@mui/material";
import {useController, useFormContext} from "react-hook-form";
import {FormField} from "./FormField";
import {useState} from "react";

const OPTIONS=[
    {id: 1, name: "Option One"},
    {id: 2, name: "Option Two"},
    {id: 3, name: "Option Three"},
];

export const CustomAutocomplete=({name}: {name: string}) => {
    const {control}=useFormContext();
    const {
        field: {onChange, value}
    }=useController({
        name,
        control,
    });
    const selected=OPTIONS.find(o => o.id===value)||null;
    return (
        <Autocomplete
            options={OPTIONS}
            getOptionLabel={(option) => option.name}
            value={selected}
            onChange={(_, newValue) => {
                onChange(newValue?.id??null);
            }}
            renderInput={(params) => (
                <FormField
                    {...params}
                    name={name}
                />
            )}
        />
    );
};
