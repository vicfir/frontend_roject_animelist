import { createSlice } from "@reduxjs/toolkit";

export const signup = createSlice({
    name: 'signup',
    initialState: [],
    reducers: {
        setUser: (state, action) => {
            state.push({email: action.payload.email, name: action.payload.name, password: action.payload.password, favorite : []})
        }
    }
});

export const {setUser} =  signup.actions;
export default signup.reducer;