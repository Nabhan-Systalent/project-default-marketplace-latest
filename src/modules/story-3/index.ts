import { Module } from '@nestjs/common';
import { BillingController } from './billing/billing.controller';
import { BillingService } from './billing/billing.service';

/**
 * Story module for story-3 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [BillingController],
  providers: [BillingService],
})
export class Story3Module {}
