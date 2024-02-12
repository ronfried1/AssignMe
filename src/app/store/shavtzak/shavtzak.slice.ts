// shavtzakSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Shavtzak {
  id: string;
  name: string;
  // Add other shavtzak-related properties here
}

interface ShavtzakState {
  shavtzakList: Shavtzak[];
}

const initialState: ShavtzakState = {
  shavtzakList: [],
};

const shavtzakSlice = createSlice({
  name: "shavtzak",
  initialState,
  reducers: {
    addShavtzak: (state, action: PayloadAction<Shavtzak>) => {
      state.shavtzakList.push(action.payload);
    },
  },
});

export const { addShavtzak } = shavtzakSlice.actions;

export default shavtzakSlice.reducer;
