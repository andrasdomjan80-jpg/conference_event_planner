// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://pixabay.com/photos/room-conference-chairs-2192484/",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/classroom-school-education-learning-2093746/",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/lecture-hall-auditorium-seats-347316/",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/business-conference-meeting-6657323/",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/chairs-table-contemporary-furniture-2181960/",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;