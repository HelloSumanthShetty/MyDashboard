import {createSlice} from '@reduxjs/toolkit';
import { PaletteMode } from '@mui/material';

type globalMode ={
    mode : PaletteMode,
    userId: string
}

const initialState : globalMode={
    mode: "dark",
    userId: "63701cc1f03239b7f700000e",
};

export const globalSlice= createSlice({
    name: "global",
    initialState,
    reducers:{
        setMode: (state) => {
            state.mode = state.mode === "light" ?  "dark" : "light"
        },
    },
});


export const {setMode} = globalSlice.actions   

export default globalSlice.reducer