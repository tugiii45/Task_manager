import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [], // This is where the tasks will live
  },
  reducers: {
    setTasks: (state, action) => {
      state.items = action.payload;
    },
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    // Person B will fill in delete/update later
  },
});

export const { setTasks, addTask } = taskSlice.actions;
export default taskSlice.reducer;