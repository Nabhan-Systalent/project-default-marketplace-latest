import { Module } from '@nestjs/common';
import { OrdersController } from './orders/orders.controller';
import { BillingController } from './billing/billing.controller';
import { OrdersService } from './orders/orders.service';
import { BillingService } from './billing/billing.service';

/**
 * Story module for story-4 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [OrdersController, BillingController],
  providers: [OrdersService, BillingService],
})
export class Story4Module {}
