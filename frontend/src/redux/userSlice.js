 import { createSlice } from "@reduxjs/toolkit";
import OtherUser from "../components/otherUser";

 const userSlice = createSlice({
    name: "user",
    initialState: {
        authUser: null,
        otherUser: null
    },
reducers:{
    setAuthUser: (state, action) => {
        state.authUser = action.payload;
    },
    setOtherUser: (state, action) => {
        state.otherUser = action.payload;

}
}
})
export const { setAuthUser, setOtherUser } = userSlice.actions;
export default userSlice.reducer;

