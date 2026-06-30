import { ApiProperty } from '@nestjs/swagger';

export class OrderDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  status: string;
}

export class CommissionDto {
  @ApiProperty()
  orderId: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  percentage: number;
}
