import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import menuReducer from "./menuReducer";
import bgReducer from "./BgReducer"

const rootReducer = combineReducers({
	menu: menuReducer,
	bg: bgReducer
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer
})

export const persistor = persistStore(store)
export default store