import RadioGroup from '@mui/material/RadioGroup';
import {RadioItem} from "./RadioItem";
import {useController, type UseControllerProps} from "react-hook-form";
import {useCallback} from "react";

export interface Company {
  id: number,
  name: string,
  employees: number,

}
export interface RadioButtonsGroupProps extends UseControllerProps {
  companies: Company[],
}

export default function RadioButtonsGroup(props: RadioButtonsGroupProps) {
  const {field}=useController({
    name: props.name,
    control: props.control,
    rules: props.rules
  });
  const {companies}=props;
  const handleChange=useCallback((e: any) => {
    const value=e.target.value;
    const numericValue=parseInt(value);
    const company=companies.find(c => c.id===numericValue);
    if(company) {
      field.onChange(company);
    }
  }, [companies]);

  return (
    <RadioGroup
      row
      {...field}
      value={field.value?.id?.toString()??''}
      onChange={handleChange}
    >
      {companies.map(c =>
        <RadioItem key={c.name} value={c.id.toString()} label={c.name} />
      )}
    </RadioGroup>
  );
}
