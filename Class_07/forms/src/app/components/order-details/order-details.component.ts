import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  orderId: number;
  selectedOrder: Order;

  constructor(
    private ordersService: OrderService,
    private route: ActivatedRoute
  ) {
    this.orderId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.ordersService.fetchOrderById(this.orderId);
    this.ordersService.selectedOrderEmitter.subscribe((order) => {
      this.selectedOrder = order;
    });
  }
}
