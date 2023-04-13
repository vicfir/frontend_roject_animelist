import { createSlice } from "@reduxjs/toolkit";

export const signup = createSlice({
    name: 'signup',
    initialState: [],
    reducers: {
        setUser: (state, action) => {
            state.push({
                email: action.payload.email,
                name: action.payload.name,
                password: action.payload.password,
                favorite: []
            });
        },
        addFavorite: (state, action) => {
            const { email, favorite } = action.payload;
            const index = state.findIndex((user) => user.email === email);
            if (index !== -1 && !state[index].favorite.includes(favorite) ) {
                state[index].favorite.push(favorite);
                alert("added");
            }
        },
        deleteFavorite: (state, action) => {
            const { email, favorite } = action.payload;
            const index = state.findIndex((user) => user.email === email);
            const indexAnim = state[index].favorite.indexOf(favorite);
            if (index !== -1 && indexAnim !== -1) {
                state[index].favorite.splice(indexAnim, 1);
            }
        },
    }
});

export const { setUser, addFavorite, deleteFavorite } =  signup.actions;
export default signup.reducer;