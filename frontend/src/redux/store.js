import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messageReducer from './messageSlice';
import socketReducer from './socketSlice';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// 1️⃣ Combine all reducers
const rootReducer = combineReducers({
    user: userReducer,
    message: messageReducer,
    socket: socketReducer
});

// 2️⃣ Persist Config
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['socket'], // Ignores socket instance in state
};

// 3️⃣ Wrap with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️⃣ Setup Store with Middleware ignoring non-serializable items
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredPaths: ['socket.socket'], // Ignores socket instance in state
            },
        }),
});

export default store;
