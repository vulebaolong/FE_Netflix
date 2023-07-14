import { configureStore } from '@reduxjs/toolkit';
import userSlices from './slices/userSlices'
import notiSlices from './slices/notiSlices'
export const store = configureStore({
    reducer: {userSlices, notiSlices},
});