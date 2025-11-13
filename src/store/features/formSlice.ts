import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {Company} from "../../components/Rg"
import type {RootState} from "../store"

// Define a type for the slice state
export interface CustomFormState {
    company: Company|null,
    firstName: string,
}

// Define the initial state using that type
const initialState: CustomFormState={
    company: null,
    firstName: '',
}

export const formSlice=createSlice({
    name: 'form',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        save: (state, action: PayloadAction<CustomFormState>) => {
            return {...state, ...action.payload};
        },
    },
})

export const {save}=formSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFirstName=(state: RootState) => state.form.firstName;
export const selectCompany=(state: RootState) => state.form.company;

export default formSlice.reducer;