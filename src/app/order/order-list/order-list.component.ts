import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {AuthenticationService} from '../../auth/authentication.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList:any;
  totalPrice: number;

  constructor(private orderService: OrderService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  private getAllOrders() {
    this.orderService.getAllItems(this.authService.getUserName()).subscribe(value => {
      this.orderList = value;
      console.log(value);
    });
    this.orderService.getTotalPrice(this.authService.getUserName()).subscribe(value => {
      this.totalPrice = value;
    });
  }

  delete(id: number) {
    this.orderService.deleteItem(id).subscribe(value => {
      window.location.reload();
    });
  }
}
