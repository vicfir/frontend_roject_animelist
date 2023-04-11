import { createSlice } from "@reduxjs/toolkit";
import users from "../../data/users.json";
import fs from "fs"

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        email: '',
        name: '',
        password: ''
    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.password = action.payload.password;

             // Enregistrer l'utilisateur dans un fichier JSON
            const user = {
                email,
                name,
                password
            };
        
            fs.readFile(users, "utf-8", (err, data) => {
                if (err) throw err;
            
                const usersD = JSON.parse(data);
            
                usersD.push(newUser);
            
                fs.writeFile(users, JSON.stringify(usersD), (err) => {
                if (err) throw err;
            
                console.log("Nouvel utilisateur ajouté !");
                });
            });
        }
    }
});

export const {setUser} =  signupSlice.actions;
export default signupSlice.reducer;