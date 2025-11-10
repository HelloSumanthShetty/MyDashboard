import { globalSlice } from '@/state/index.ts'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
   reducer : {
    global :globalSlice.reducer
   }
})

 export type RootState = ReturnType<typeof store.getState>;
