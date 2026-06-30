import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiOperation({ summary: 'List vendor orders' })
  @ApiResponse({ status: 200, description: 'Success', type: [OrderDto] })
  async listOrders(): Promise<OrderDto[]> {
    return this.ordersService.findAll();
  }
}
