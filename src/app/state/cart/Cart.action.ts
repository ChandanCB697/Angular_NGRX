import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../shared/Model/product.interface";

export const addToCart = createAction('[Cart Component] AddToCart',props<{product:IProduct}>());

export const incrementProduct = createAction('[Cart Component] IncrementProduct',props<{productID:Number}>());

export const decrementProduct = createAction('[Cart Component] DecrementProduct',props<{productID:Number}>());

export const removeItem = createAction('[Cart Component] RemoveItem',props<{productID:Number}>());
