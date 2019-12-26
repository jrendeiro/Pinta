import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { this.items = this.cartService.getItems();
  this.checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
 }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit() {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
