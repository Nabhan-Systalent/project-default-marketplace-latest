import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto';

@Injectable()
export class OrdersService {
  private readonly orders: OrderDto[] = [
    { id: 'ord-1', amount: 100, status: 'completed' },
    { id: 'ord-2', amount: 250, status: 'pending' },
  ];

  findAll(): OrderDto[] {
    return this.orders;
  }
}
