import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { api } from '@/redux/services/api.config'
import { rtkQueryLogger } from '@/redux/services/api.util'
import { layoutSlice } from '../slices/layout.slice'
import { pathnameSlice } from '../slices/pathname.slice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [layoutSlice.name]: layoutSlice.reducer,
    [pathnameSlice.name]: pathnameSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware, rtkQueryLogger),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
