import { createSlice, configureStore } from '@reduxjs/toolkit'

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    volume: 0.3,
    set: 0,
    nameOfTrack: ''
  },
  reducers: {
    changeVolume: (state, action) => {
        state.volume = action.payload;
    },
    changeSet: (state, action) => {
        state.set = action.payload
    },
    changeNameOfTrack: (state, action) => {
        state.nameOfTrack = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeVolume, changeSet, changeNameOfTrack } = musicSlice.actions

export default configureStore({
    reducer: {
      counter: musicSlice.reducer,
    },
  })