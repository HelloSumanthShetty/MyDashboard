import {createSlice} from '@reduxjs/toolkit';
import { PaletteMode } from '@mui/material';

type globalMode ={
    mode : PaletteMode
}

const initialState : globalMode={
    mode: "dark"
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