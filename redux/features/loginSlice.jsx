import { createSlice } from "@reduxjs/toolkit";
// import { useAppSelector } from "u@/redux/hookndefined";



export const login = createSlice({
    name: 'login',
    initialState: {
        acces: false,
        denied: false,
        email: null
    },
    reducers: {
        submit: (state, action) => {

            const { email, password, users } = action.payload;

            const hasUser = users.some(user => user.email === email && user.password === password);
            if (hasUser) {
                
                return { acces: true, denied: false, email: email }
            } else {
                
                return { acces: false, denied: true }
            }
        },
        logout: () => {
            return { acces: false, denied: false }
        }
    }
});

export const { submit, logout } = login.actions;
export default login.reducer;