import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}
  orders: Order[];

  ngOnInit(): void {
    this.ordersService.fetchAllOrders();
    this.ordersService.ordersEmitter.subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }

  onOrderClick(selectedOrder: Order) {
    this.ordersService.onOrderClick(selectedOrder);
  }

  // 4.1) Create an order list component and have it print out all orders. (ID and status)
}
