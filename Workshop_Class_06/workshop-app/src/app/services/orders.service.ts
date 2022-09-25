import { EventEmitter, Injectable } from '@angular/core';
import { Order } from '../interfaces/order';
import { OrderStatus } from '../interfaces/order-status';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Order[];
  selectedOrder: Order;
  ordersEmitter = new EventEmitter<Order[]>();
  selectedOrderEmitter = new EventEmitter<Order>();
  constructor() {}

  // 3.2) Implement methods for fetching all orders, and fetching a single order by ID
  fetchAllOrders() {
    fetch('https://movies-api-sedc.herokuapp.com/orders/')
      .then((res) => res.json())
      .then((data) => {
        this.orders = data;
        this.ordersEmitter.emit(this.orders);
      });
  }

  fetchOrderById(id: number) {
    fetch(`https://movies-api-sedc.herokuapp.com/orders/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.selectedOrder = data;
        this.selectedOrderEmitter.emit(this.selectedOrder);
      });
  }

  onOrderClick(order: Order) {
    this.selectedOrderEmitter.emit(order);
  }

  updateOrderStatus(orderId: number, newStatus: OrderStatus) {
    this.orders.forEach((order: Order) => {
      if (order.id === orderId) {
        order.status = newStatus;
        return;
      }
    });
    this.ordersEmitter.emit(this.orders);
  }
}
