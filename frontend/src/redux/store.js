import { combineReducers, configureStore }  from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import  messageReducer  from "./messageSlice";
import socketReducer from "./socketSlice";

const rootReducer=combineReducers({
    user:userReducer,
    message:messageReducer,
    socket:socketReducer,
})

const store=configureStore({
    reducer:rootReducer
})

export default store;