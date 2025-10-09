import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    website: false,
  },
  reducers: {
    setwebsite: (state, action: PayloadAction<boolean>) => {
      state.website = action.payload
    },
  },
})

export const { setwebsite } = layoutSlice.actions
