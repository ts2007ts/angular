import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  //listOfString: string[] = ['Tarek', 'Sara', 'Malek', 'Alia', 'Louai', 'Wedad'];
  // //name="John Smith";
  // addToCart: number = 0;
  // product = {
  //   name: 'iPhone X',
  //   price: 789,
  //   color: 'Black',
  //   discount: 8.5,
  //   inStock: 10,
  //   pImage: '/assets/images/iphone.png'
  // }

  // getDiscountedPrice() {
  //   return this.product.price - (this.product.price * this.product.discount / 100)
  // }

  // onNameChange(event: any) {
  //   //this.name = event.target.value;
  //   //console.log(event.target.value);
  // }

  // decrementCartValue() {
  //   if (this.addToCart > 0) {
  //     this.addToCart--;
  //   }

  // }

  // incrementCartValue() {
  //   if (this.addToCart < this.product.inStock) {
  //     this.addToCart++;
  //   }

  // }

  searchText: string = '';

  setSearchText(event: string) {
    this.searchText = event;
  }
}
