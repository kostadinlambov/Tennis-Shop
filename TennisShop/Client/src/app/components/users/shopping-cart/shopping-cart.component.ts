import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../models/order.model';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  // orders$: Observable<OrderModel[]>;
  orders: OrderModel[];
  totalPrice: number = 0;
  userId: string;

  constructor(
    private userService: UsersService,
    private orderService: OrderService
  ) {
    this.userId = this.userService.getId();
   }

  ngOnInit() {
    debugger;
    this.load();
  }

  


  load() {
    debugger;
    const id = this.userService.getId();
    let sum = 0;
    this.orderService.loadOrders(id).subscribe(
      res => {
        debugger;
        console.log('loadOrders res:', res);
        res.forEach(element => {
          debugger;
          console.log(element.racketPrice);
          sum +=  Number(element.racketPrice);
        });
        this.totalPrice = sum;
        this.orders = res;
      
      },
      err => console.log('loadOrders err:', err),
    );
  }

  checkout() {
    this.orderService.checkout(this.userId).subscribe(
      res =>{
        console.log('checkout res:', res),
        this.load();
      },
      err => console.log('checkout err:', err)
    );
  
  }

  remove(orderId) {
    debugger;
    this.orderService.removeOrder(orderId).subscribe(
      res =>{
        this.load();
        console.log('removeRacket res:', res)
      },
      err => console.log('removeRacket err:', err)
    );
  }

}
