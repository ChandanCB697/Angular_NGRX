import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { selectCount } from './state/counter/counter.selector';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductCartComponent } from './shared/component/product-cart/product-cart.component';
import { IProduct } from './shared/Model/product.interface';
import { selectCartproducts } from './state/cart/Cart.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CounterComponent,
    CommonModule,
    ProductComponent,
    ProductCartComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  count$:Observable<number>;
  products$:Observable<IProduct[]>;
  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount);
    this.products$ = this.store.select(selectCartproducts);
  }

}
