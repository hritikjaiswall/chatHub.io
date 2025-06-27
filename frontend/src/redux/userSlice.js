 import { createSlice } from "@reduxjs/toolkit";
import OtherUser from "../components/otherUser";

 const userSlice = createSlice({
    name: "user",
    initialState: {
        authUser: null,
        otherUser: null,
        selectedUser: null,
        onlineUser: [],
    },
reducers:{
    setAuthUser:(state,action)=>{
            state.authUser = action.payload;
        },
        setOtherUser:(state, action)=>{
            state.otherUser = action.payload;
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser = action.payload;
        },
        setOnlineUser:(state,action)=>{
            state.onlineUser = action.payload;
        },

}}
)
export const { setAuthUser, setOtherUser,setSelectedUser,setOnlineUser} = userSlice.actions;
export default userSlice.reducer;

