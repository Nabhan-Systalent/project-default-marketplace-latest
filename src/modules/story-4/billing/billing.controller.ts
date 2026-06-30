import { Controller, Get } from '@nestjs/common';
import { BillingService } from './billing.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CommissionDto } from './dto';

@ApiTags('Billing')
@Controller('commissions')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  @ApiResponse({ status: 200, type: [CommissionDto] })
  getCommissions(): CommissionDto[] {
    return this.billingService.getCommissions();
  }
}
