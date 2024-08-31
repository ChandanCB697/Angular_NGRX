import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CartState } from "./cart.reducer";

export const selectCartState = (state: AppState) => state.cart;

export const selectCartproducts = createSelector(
    selectCartState,
    (state:CartState) => state.products
);
export const selectTotal = createSelector(
    selectCartState,
    (state:CartState) => state.totalPrice
);
export const subTotal = createSelector(
    selectCartState,
    (state:CartState) => state.subTotal
);