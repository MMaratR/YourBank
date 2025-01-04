import { configureStore, createSlice } from '@reduxjs/toolkit'

const titleSlice = createSlice({
  name: 'title',
  initialState: {
    isAuth: false
  },
  reducers: {
    setTitle: (state, action) => {
      state.isAuth = action.payload
    }
  }
})

export const { setTitle } = titleSlice.actions

const store = configureStore({
  reducer: {
    title: titleSlice.reducer
  }
})

export default store