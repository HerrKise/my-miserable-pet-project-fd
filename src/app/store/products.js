import { createSlice, createAction } from "@reduxjs/toolkit";
import productService from "../services/product.service";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true;
        },
        productsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        productUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((p) => p._id === action.payload._id)
            ] = action.payload;
        },
        productCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        productRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (p) => p._id !== action.payload
            );
        }
    }
});

const { reducer: productReducer, actions } = productsSlice;
const {
    productsRequested,
    productsReceived,
    productsRequestFailed,
    productUpdateSuccessed,
    productCreated,
    productRemoved
} = actions;

const createProductRequested = createAction("products/createProductRequested");
const createProductFailed = createAction("products/createProductFailed");
const productRemoveRequested = createAction("products/productRemoveRequested");
const productRemoveFailed = createAction("products/productRemoveFailed");
const productUpdateRequested = createAction("product/productUpdateRequested");
const productUpdateFailed = createAction("products/productUpdateFailed");

export const loadProductsList = () => async (dispatch) => {
    dispatch(productsRequested());
    try {
        const { content } = await productService.fetchAll();
        dispatch(productsReceived(content));
    } catch (error) {
        dispatch(productsRequestFailed(error.message));
    }
};

export const updateProduct = (payload) => async (dispatch) => {
    dispatch(productUpdateRequested());
    try {
        const { content } = await productService.update(payload);
        dispatch(productUpdateSuccessed(content));
    } catch (error) {
        dispatch(productUpdateFailed(error.message));
    }
};

export const createProduct = (payload) => async (dispatch) => {
    dispatch(createProductRequested());
    try {
        const { content } = await productService.create(payload);
        dispatch(productCreated(content));
    } catch (error) {
        dispatch(createProductFailed(error.message));
    }
};

export const removeProduct = (productId) => async (dispatch) => {
    dispatch(productRemoveRequested());
    try {
        const { content } = await productService.remove(productId);
        if (!content) {
            dispatch(productRemoved(productId));
        }
    } catch (error) {
        dispatch(productRemoveFailed(error.message));
    }
};

export const getProductsList = (state) => state.products.entities;

export default productReducer;
