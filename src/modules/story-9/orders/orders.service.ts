import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto';

@Injectable()
export class OrdersService {
  private readonly orders: OrderDto[] = [
    {
      id: 'ord_1',
      total: 99.99,
      status: 'pending',
      createdAt: new Date(),
    },
    {
      id: 'ord_2',
      total: 150.0,
      status: 'shipped',
      createdAt: new Date(),
    },
  ];

  async findAll(): Promise<OrderDto[]> {
    // In a real application, this would fetch from a database or external vendor API
    return this.orders;
  }
}
