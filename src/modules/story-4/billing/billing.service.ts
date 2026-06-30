import { Injectable } from '@nestjs/common';
import { CommissionDto } from './dto';

@Injectable()
export class BillingService {
  private readonly commissions: CommissionDto[] = [
    { orderId: 'ord-1', amount: 10, percentage: 0.1 },
  ];

  getCommissions(): CommissionDto[] {
    return this.commissions;
  }
}
