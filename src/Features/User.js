import { createSlice } from "@reduxjs/toolkit";

import UsersData from "../FakeData";

export const userDetails = createSlice({
  name: "user",
  initialState: { value: UsersData },
  reducers: {
    addUsers: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter(
        (items) => items.id !== action.payload.id
      );
    },
    updateUser: (state, action) => {
      state.value = state.value.map((items) => {
        if (items.id === action.payload.id) {
          return {
            ...items,
            name: action.payload.name,
            username: action.payload.username,
          };
        }
        return items;
      });
    },
  },
});

export const { addUsers, deleteUser, updateUser } = userDetails.actions;
export default userDetails.reducer;
