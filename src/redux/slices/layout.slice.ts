import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    website: false,
    themeSetup: 'manar',
  },
  reducers: {
    setwebsite: (state, action: PayloadAction<boolean>) => {
      state.website = action.payload
    },
    setThemeSetup: (state, action: PayloadAction<string>) => {
      state.themeSetup = action.payload
    },
  },
})

export const { setwebsite, setThemeSetup } = layoutSlice.actions
