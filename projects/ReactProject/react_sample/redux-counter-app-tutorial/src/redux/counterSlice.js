import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",  // sliceの名前
  initialState: {
    value: 0,
  },
  reducers: {
    // reducerを設定すると自動的にアクションクリエーターも作られる（ここでいうincrement,decrement）
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;