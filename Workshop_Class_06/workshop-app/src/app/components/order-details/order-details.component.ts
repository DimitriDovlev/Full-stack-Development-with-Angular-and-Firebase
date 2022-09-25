import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderStatus } from 'src/app/interfaces/order-status';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}
  selectedOrder: Order;
  OrderStatus: OrderStatus;

  ngOnInit(): void {
    this.ordersService.selectedOrderEmitter.subscribe((order: Order) => {
      this.selectedOrder = order;
      // this.orderStatus = order.status;
    });
  }

  onUpdateStatus(status: OrderStatus) {
    this.ordersService.updateOrderStatus(this.selectedOrder.id, status);
  }
}
