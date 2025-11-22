import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from "../store"

export interface CompanyForm {
    name: string|null,
    address: string|null,
}

// Define a type for the slice state
export interface AppState {
    selectedCompanies: number[],
    currentSelectedCompany: number|null,
    companyForms: Record<number, CompanyForm>,
}

// Define the initial state using that type
const initialState: AppState={
    selectedCompanies: [],
    currentSelectedCompany: null,
    companyForms: {},
}

export const appSlice=createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<number>) => {
            state.currentSelectedCompany=action.payload;
        },
        saveCurrentForm: (state, action: PayloadAction<CompanyForm>) => {
            let current=state.currentSelectedCompany;
            if(current) {
                state.companyForms[current]=action.payload;
            }
        }
    },
})

export const {setCurrent}=appSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentForm=(state: RootState): CompanyForm|null => {
    let current=state.app.currentSelectedCompany;
    if(current) {
        return state.app.companyForms[current];
    }
    return null;
}

// export const selectCurrentCompanies=(state:RootState)
export default appSlice.reducer;