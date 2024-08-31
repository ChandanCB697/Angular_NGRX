import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { selectCartState, selectCartproducts, selectTotal, subTotal } from '../../../state/cart/Cart.selector';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { decrementProduct, incrementProduct, removeItem } from '../../../state/cart/Cart.action';
import { increment } from '../../../state/counter/counter.actions';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  cartItems$ = this.store.select(selectCartproducts);
  totalPrice$ = this.store.select(selectTotal);
  // discount:number = 10;
  sumTotal$ = this.store.select(subTotal);
  constructor(private store:Store<AppState>){

  }

  remove(productID:number){
    this.store.dispatch(removeItem({productID}));
  }
  increment(productID:number){
    this.store.dispatch(incrementProduct({productID}));
  }
  decrement(productID:number){
    this.store.dispatch(decrementProduct({productID}));
  }
}
