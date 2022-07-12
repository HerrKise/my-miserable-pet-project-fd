import categoriesReducer from "./categories";
import productsReducer from "./products";
import userReducer from "./users";

const { createReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = createReducers({
    categories: categoriesReducer,
    products: productsReducer,
    user: userReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
