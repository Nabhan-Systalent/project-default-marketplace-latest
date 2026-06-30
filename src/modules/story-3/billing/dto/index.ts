import { ApiProperty } from '@nestjs/swagger';

export class CommissionDto {
  @ApiProperty({ description: 'The unique identifier of the commission' })
  id: string;

  @ApiProperty({ description: 'The amount earned' })
  amount: number;

  @ApiProperty({ description: 'The currency code' })
  currency: string;

  @ApiProperty({ description: 'The date the commission was earned' })
  earnedAt: Date;
}
