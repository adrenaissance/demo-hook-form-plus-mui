import './App.css'
import {FormProvider, useForm, type SubmitHandler} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import type {Company} from "./components/Rg";
import RadioButtonsGroup from "./components/Rg";

interface Form {
  company: Company
}

const App=() => {
  const methods=useForm<Form>();
  const {handleSubmit, control}=methods;

  const companies: Company[]=[
    {id: 1, name: "hello world", employees: 100},
    {id: 2, name: "hello world2", employees: 102},
    {id: 3, name: "hello world3", employees: 103},
    {id: 4, name: "hello world4", employees: 104},
  ];
  const onSubmit: SubmitHandler<Form>=(data) => console.log(data);
  const onChange=(company: Company) => {
    console.log(company);
  }
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RadioButtonsGroup onChange={onChange} name="company" companies={companies} />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
      <DevTool control={control} />
    </>
  )
}

export default App;