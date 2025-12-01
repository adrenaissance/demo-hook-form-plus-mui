import {TextField, Typography, type TextFieldProps} from "@mui/material"

export const ETextField=(props: TextFieldProps) => {
    const {name, multiline, ...rest}=props;
    return (
        <div className="flex flex-col gap-2 h-full">
            <Typography variant="caption" component='label' htmlFor={name}>
                {name}
            </Typography>
            <TextField {...rest} variant="outlined" error={true} multiline={multiline} name={name} id={name} />
        </div>
    )
}