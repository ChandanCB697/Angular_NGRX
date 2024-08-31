import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../Model/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{
@Input() product!:IProduct ;
@Output() handeleAdd = new EventEmitter();

constructor(){}
  ngOnInit(): void {
    
  }

  addToCart(product:IProduct){
    this.handeleAdd.emit(product);
  }
}
