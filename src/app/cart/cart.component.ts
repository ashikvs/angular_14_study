import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private notification:NotificationService

  ) { 
  }
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  ngOnInit(): void {
  }
  onSubmit() {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    debugger
    this.notification.sendNotification('item checked out!')
  }

}
