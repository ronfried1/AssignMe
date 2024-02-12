// peopleSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Person {
  id: string;
  name: string;
  // Add other person-related properties here
}

interface PeopleState {
  availablePeople: Person[];
  selectedPeople: Person[];
  people: Person[];
}

const initialState: PeopleState = {
  availablePeople: [],
  selectedPeople: [],
  people: [],
};

export const fetchAllPeople = createAsyncThunk("people/fetchAll", async () => {
  try {
    // Replace this with your actual API call to fetch people data
    const response = await fetch("/api/people"); // Adjust the URL as needed
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch people data");
  }
});

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addSelectedPeople: (state, action: PayloadAction<Person>) => {
      state.selectedPeople.push(action.payload);
    },
    addAvailablePeople: (state, action: PayloadAction<Person>) => {
      state.selectedPeople.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPeople.pending, (state) => {});
    builder.addCase(
      fetchAllPeople.fulfilled,
      (state, action: PayloadAction<Person[]>) => {
        state.people = action.payload;
      }
    );
    builder.addCase(fetchAllPeople.rejected, (state, action) => {
      //   state.error = action.payload;
    });
  },
});

export const { addSelectedPeople, addAvailablePeople } = peopleSlice.actions;

export default peopleSlice.reducer;
