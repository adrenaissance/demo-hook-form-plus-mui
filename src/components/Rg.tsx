import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {RadioItem} from "./RadioItem";
import {useController, type UseControllerProps} from "react-hook-form";
import {useCallback, type ChangeEvent} from "react";

export interface Company {
  id: number,
  name: string,
  employees: number,

}
export interface RadioButtonsGroupProps extends UseControllerProps {
  companies: Company[],
  onChange: (company: Company) => void;
}

export default function RadioButtonsGroup(props: RadioButtonsGroupProps) {
  const {field}=useController({
    name: props.name,
    control: props.control,
    rules: props.rules
  });
  const {onChange, companies}=props;
  const handleChange=useCallback((e: any) => {
    const value=e.target.value;
    const numericValue=parseInt(value);
    const company=companies.find(c => c.id===numericValue);
    if(company) {
      field.onChange(company);
      onChange(company);
    }
  }, [companies, onChange]);

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
