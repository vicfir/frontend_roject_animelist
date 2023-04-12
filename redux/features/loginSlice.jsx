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
            // const users = useAppSelector(state => state.signupReducer[0]);

            const { email, password, users } = action.payload;

            const hasUser = users.map(user => user.some(obj => obj.email === email && obj.password === password));
            if (hasUser) {
                alert("connecte")
                return { acces: true, denied: false, email: email }
            } else {
                alert("connection erreur")
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