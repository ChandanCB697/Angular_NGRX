import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/component/product-card/product-card.component';
import { IProduct } from '../shared/Model/product.interface';
import { Store } from '@ngrx/store';
import { addToCart } from '../state/cart/Cart.action';
import { ProductApiService } from '../shared/component/service/product-api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
http = inject(HttpClient);
productApi = inject(ProductApiService);
// products$ = this.http.get('https://fakestoreapi.com/products') as Observable<IProduct[]>;
products$ = this.productApi.getProducts() as Observable<IProduct[]>;

constructor(private store :Store<{cart: {products:IProduct[]}}>){

}
ngOnInit(): void {

  // this.http.get('https://fakestoreapi.com/products')
  // .subscribe(res =>{
  //   console.log(res);
  // })
  
  // this.productApi.getProducts().subscribe(res=>{
  //   console.log(res);
  // })
}

addItemToCart(product:IProduct){
  this.store.dispatch(addToCart({product}))
}
}
