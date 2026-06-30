import { Module } from '@nestjs/common';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';

/**
 * Story module for story-9 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class Story9Module {}
