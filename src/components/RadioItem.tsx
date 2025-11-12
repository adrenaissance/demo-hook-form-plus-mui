import {FormControlLabel, Radio, useRadioGroup} from "@mui/material"
import type {Company} from "./Rg"
import {useMemo} from "react";

export interface RadioItemProps {
    label: string,
    value: string,
}

export const RadioItem=(props: RadioItemProps) => {
    const group=useRadioGroup();
    const {value, label}=props;

    const checked=() => {
        return group&&group.value===value;
    }

    return (
        <div>
            <Radio value={value} checked={checked()}></Radio>
            <label>{label}</label>
        </div>
    )
}