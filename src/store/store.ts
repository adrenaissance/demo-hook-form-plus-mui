import {configureStore} from '@reduxjs/toolkit'
import {formSlice} from "./features/formSlice"
import {appSlice} from "./features/appSlice"

export const store=configureStore({
    reducer: {
        form: formSlice.reducer,
        app: appSlice.reducer,
    },
    devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState=ReturnType<typeof store.getState>

// Inferred type: {form: FormState}
export type AppDispatch=typeof store.dispatch