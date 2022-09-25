import { OrderStatus } from './order-status';
// 2.1) Create an order Interface. (id, items, amount, status, date, deliverer)
export interface Order {
  id: number;
  items: string[];
  amount: number;
  status: OrderStatus;
  date: string;
  deliverer: string;
}
