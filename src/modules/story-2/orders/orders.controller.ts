import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrderResponseDto } from './dto/order.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiOperation({ summary: 'List vendor orders' })
  @ApiResponse({ status: 200, description: 'Success', type: [OrderResponseDto] })
  async listOrders(): Promise<OrderResponseDto[]> {
    return await this.ordersService.findAll();
  }
}
