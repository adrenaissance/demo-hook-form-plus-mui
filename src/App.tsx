import './App.css'
import {FormProvider, useForm, type SubmitHandler} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import type {Company} from "./components/Rg";
import RadioButtonsGroup from "./components/Rg";
import {Input} from "./components/Input";
import {save, type CustomFormState} from "./store/features/formSlice";
import {useAppDispatch} from "./store/hooks";
import {EMAIL_FIELD, FIRST_NAME_FIELD, LAST_NAME_FIELD, CUSTOM_REFS, useDynamicSchema, type IForm} from "./hooks/useDynamicSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import {FieldArray} from "./components/FieldArray";
import {G} from "./components/G";
import {createTheme, ThemeProvider} from "@mui/material";

const App=() => {
  const theme=createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {

          root: {
            height: "100%", // ensures outlined variant fills height
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray", // default
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange", // hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "yellow", // focused ✅ works!
            },
            "&.Mui-error .MuiOutlinedInput-notchedOutline": {
              borderColor: "red", // error border
            },
          }
        }
      },

      MuiTextField: {
        styleOverrides: {
          root: {
            height: "100%",
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            marginTop: 0
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            height: "100%", // ← needed for vertical stretching
            alignItems: "stretch", // ← allows textarea to grow
          },
          inputMultiline: {
            height: "100% !important", // ← textarea itself fills container
            resize: "none",            // optional: prevent dragging
          },
        },
      },
    },
  });

  const {schema}=useDynamicSchema();
  const methods=useForm<IForm>({
    shouldUnregister: false,
    mode: "onBlur",
    defaultValues: {
      [FIRST_NAME_FIELD]: '',
      [LAST_NAME_FIELD]: '',
      [EMAIL_FIELD]: '',
      [CUSTOM_REFS]: Array.from({length: 3}, () => ({value: ""})),
    },
    resolver: yupResolver(schema) as any,
  });
  const {handleSubmit, control, formState, register}=methods;
  // const companies: Company[]=[
  //   {id: 1, name: "hello world", employees: 100},
  //   {id: 2, name: "hello world2", employees: 102},
  //   {id: 3, name: "hello world3", employees: 103},
  //   {id: 4, name: "hello world4", employees: 104},
  // ];
  const onSubmit=(data: any) => {
    console.log(data);
  }

  return (
    <ThemeProvider theme={theme}>

      <FormProvider {...methods}>
        <G />
        {/* <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 justify-items-center align-items-center">
        <div className="flex flex-col gap-2">
          <label htmlFor={FIRST_NAME_FIELD}>first name</label>
          <input id={FIRST_NAME_FIELD} className="border border-2" {...register(FIRST_NAME_FIELD)} />
          <p>{formState.errors[FIRST_NAME_FIELD]?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={LAST_NAME_FIELD}>last name</label>
          <input id={LAST_NAME_FIELD} className="border border-2 border-red-500" {...register(LAST_NAME_FIELD)} />
          <p>{formState.errors[LAST_NAME_FIELD]?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={EMAIL_FIELD}>email</label>
          <input id={EMAIL_FIELD} className="border border-2 border-red-500"{...register(EMAIL_FIELD)} />
        </div>

        <div className="flex flex-col gap-2">
          <FieldArray name={CUSTOM_REFS} />
          <p>{formState.errors[EMAIL_FIELD]?.message}</p>
        </div> */}

        {/* <Input rules={{required: 'First name is required'}} name="firstName" label="first name" />
          <RadioButtonsGroup name="company" companies={companies} />
          <button type="submit">Submit</button> */}
        {/* <button type="submit">Submit</button> */}
        {/* </form> */}
      </FormProvider>
      <DevTool control={control} />
    </ThemeProvider>
  )
}

export default App;