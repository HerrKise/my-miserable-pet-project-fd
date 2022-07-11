import categoriesReducer from "./categories";

const { createReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = createReducers({ categories: categoriesReducer });

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
