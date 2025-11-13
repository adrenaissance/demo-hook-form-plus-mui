import {configureStore} from '@reduxjs/toolkit'
import {formSlice} from "./features/formSlice"

export const store=configureStore({
    reducer: {
        form: formSlice.reducer,
    },
    devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState=ReturnType<typeof store.getState>

// Inferred type: {form: FormState}
export type AppDispatch=typeof store.dispatch