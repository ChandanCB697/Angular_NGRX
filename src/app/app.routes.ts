import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'counter',
        loadComponent: () =>
        import('./counter/counter.component').then((a) => a.CounterComponent)
    },
    {
        path:'product',
        loadComponent: () =>
        import('./product/product.component').then((a) => a.ProductComponent)
    },
    {
        path:'cart',
        loadComponent: () =>
        import('./shared/component/product-cart/product-cart.component').then((a) => a.ProductCartComponent)
    }
];
