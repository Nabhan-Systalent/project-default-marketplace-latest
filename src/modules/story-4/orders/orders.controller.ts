import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { OrderDto } from './dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiResponse({ status: 200, type: [OrderDto] })
  listOrders(): OrderDto[] {
    return this.ordersService.findAll();
  }
}
