import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage
import pop from "../redux/feacture/Jobfeacture";

// Persist Config
const persistConfig = {
  key: "root",
  storage,
};

// Create Persisted Reducer
const persistedReducer = persistReducer(persistConfig, pop);

// Configure Store
export const store = configureStore({
  reducer: {
    jobApp: persistedReducer, // Wrap your job reducer with persistence
  },
});

// Create Persistor
export const persistor = persistStore(store);

