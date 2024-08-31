import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/Model/product.interface";
// import { addToCart, incrementProduct } from "./Cart.action";
import * as cartActions from "./Cart.action";

export interface CartState {
    products: IProduct[];
    totalPrice:number;
    subTotal:number;
}

export const initialCounterState: CartState = {
    products: [],
    totalPrice: 0,
    subTotal:0
}

export function calculateTotalPrice(products:IProduct[]){
    return products.reduce((total,product)=> total+(product.price*product.quantity),0)
}

export const cartReducer = createReducer(
    initialCounterState,
    // on(addToCart,(state,{product}) =>{
    //     const updatedPrduct = [...state.products,product];
    //     return {
    //         ...state,
    //         products:updatedPrduct
    //     }
    // }),
    // on(incrementProduct,(state,{productID})=>{
    //     const updatedPrduct = state.products.map((product) => product.id === productID?product.quantity++:product)
    //     return {
    //         ...state
    //     }
    // })

    on(cartActions.addToCart, (state, { product }) => {
        const updatedPrduct = [...state.products, product];
        return {
            ...state,
            products: updatedPrduct,
            totalPrice:calculateTotalPrice(updatedPrduct),
            subTotal:calculateTotalPrice(updatedPrduct)-10
        }
    }),
    on(cartActions.removeItem, (state, { productID }) => {
        const updatedPrduct = state.products.filter((product) =>
            product.id !== productID );
        return {
            ...state,
            products: updatedPrduct,
            totalPrice:calculateTotalPrice(updatedPrduct),
            subTotal:calculateTotalPrice(updatedPrduct)-10
        };
    }),
    on(cartActions.incrementProduct, (state, { productID }) => {
        const updatedPrduct = state.products.map((product) =>
            product.id === productID ?
                { ...product, quantity: product.quantity + 1 } : product);
        return {
            ...state,
            products: updatedPrduct,
            totalPrice:calculateTotalPrice(updatedPrduct),
            subTotal:calculateTotalPrice(updatedPrduct)-10
        };
    }),
    on(cartActions.decrementProduct, (state, { productID }) => {
        const updatedPrduct = state.products.map((product) =>
            product.id === productID ?
                { ...product, quantity: product.quantity - 1 } : product);
        return {
            ...state,
            products: updatedPrduct,
            totalPrice:calculateTotalPrice(updatedPrduct),
            subTotal:calculateTotalPrice(updatedPrduct)-10
        };
    })

)