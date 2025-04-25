import {createSlice} from "@reduxjs/toolkit";

const initialState={
    token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null,
    otherUser:localStorage.getItem("otherUser")?JSON.parse(localStorage.getItem("otherUser")):[],
    // onlineUsers:localStorage.getItem("onlineUsers")?JSON.parse(localStorage.getItem("onlineUsers")):[],
    onlineUsers:[],
    selectedUser:localStorage.getItem("selectedUser")?JSON.parse(localStorage.getItem("selectedUser")):null,
    authUser:localStorage.getItem("authUser")?JSON.parse(localStorage.getItem("authUser")):null
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setToken:(state,action)=>{
            state.token=action.payload
        },
        setOtherUser:(state,action)=>{
            state.otherUser=action.payload
        },
        setOnlineUsers:(state,action)=>{
            state.onlineUsers=action.payload
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser=action.payload
        },
        setAuthUser:(state,action)=>{
            state.authUser=action.payload
        },
    }
})

export const{setToken,setOtherUser,setOnlineUsers,setSelectedUser,setAuthUser}=userSlice.actions;
export default userSlice.reducer;