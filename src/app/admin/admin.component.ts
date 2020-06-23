import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  orders: any[];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    console.log('Admin component');
    // this.orderService.getOrders().subscribe((orders) => (this.orders = orders));
  }
}
