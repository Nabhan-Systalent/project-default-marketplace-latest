import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { BillingService } from './billing.service';
import { CommissionDto } from './dto';

@ApiTags('Billing')
@Controller('commissions')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  @ApiOperation({ summary: 'View earned commissions' })
  @ApiResponse({ status: 200, description: 'Success', type: [CommissionDto] })
  async getCommissions(): Promise<CommissionDto[]> {
    return this.billingService.getCommissions();
  }
}
