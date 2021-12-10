import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from '../Features/userSlice';


export const store = configureStore({
    reducer: {
        user: userDataReducer,
    }
});
