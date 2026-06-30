import { Injectable } from '@nestjs/common';
import { CommissionDto } from './dto';

@Injectable()
export class BillingService {
  private readonly commissions: CommissionDto[] = [
    {
      id: 'comm_1',
      amount: 150.50,
      currency: 'USD',
      earnedAt: new Date(),
    },
    {
      id: 'comm_2',
      amount: 75.00,
      currency: 'USD',
      earnedAt: new Date(Date.now() - 86400000),
    },
  ];

  async getCommissions(): Promise<CommissionDto[]> {
    return this.commissions;
  }
}
