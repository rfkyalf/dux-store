import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/productSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedProductsReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
  reducer: {
    products: persistedProductsReducer,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
