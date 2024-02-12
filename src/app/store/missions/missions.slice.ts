// missionsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Mission {
  id: string;
  name: string;
  // Add other mission-related properties here
}

interface MissionsState {
  missions: Mission[];
}

const initialState: MissionsState = {
  missions: [],
};

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    addMission: (state, action: PayloadAction<Mission>) => {
      state.missions.push(action.payload);
    },
    // Add other mission-related reducers here
  },
});

export const { addMission } = missionsSlice.actions;

export default missionsSlice.reducer;
