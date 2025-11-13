import './App.css'
import {FormProvider, useForm, type SubmitHandler} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import type {Company} from "./components/Rg";
import RadioButtonsGroup from "./components/Rg";
import {Input} from "./components/Input";
import {save, type CustomFormState} from "./store/features/formSlice";
import {useAppDispatch} from "./store/hooks";

const App=() => {
  const methods=useForm<CustomFormState>({
    defaultValues: {
      company: null,
      firstName: '',
    }
  });
  const {handleSubmit, control}=methods;
  const companies: Company[]=[
    {id: 1, name: "hello world", employees: 100},
    {id: 2, name: "hello world2", employees: 102},
    {id: 3, name: "hello world3", employees: 103},
    {id: 4, name: "hello world4", employees: 104},
  ];
  const dispatch=useAppDispatch();
  const onSubmit: SubmitHandler<CustomFormState>=(data) => {
    console.log(data);
    dispatch(save(data));
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input rules={{required: 'First name is required'}} name="firstName" label="first name" />
          <RadioButtonsGroup name="company" companies={companies} />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
      <DevTool control={control} />
    </>
  )
}

export default App;