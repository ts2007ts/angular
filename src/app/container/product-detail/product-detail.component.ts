import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  @Input()
  productListComponent: ProductListComponent = undefined;

  ngOnInit(): void {
    this.product = this.productListComponent.selectedProduct;
  }
}
