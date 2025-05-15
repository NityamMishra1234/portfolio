// store/index.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '@/features/auth/authSlice';
import todoReducer from '@/features/todo/todoSlice';
import projectReducer from '../features/project/projectSlice'
import blogReducer from '../features/blogs/blogSlice'
const rootReducer = combineReducers({
  auth: authReducer,
  todos: todoReducer,
  project:projectReducer,
  blogs:blogReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'todos'], // now also persisting todos
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
