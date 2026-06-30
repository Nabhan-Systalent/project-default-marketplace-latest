import { ApiProperty } from '@nestjs/swagger';

export class OrderDto {
  @ApiProperty({ description: 'The unique identifier of the order' })
  id: string;

  @ApiProperty({ description: 'The total amount of the order' })
  total: number;

  @ApiProperty({ description: 'The status of the order' })
  status: string;

  @ApiProperty({ description: 'The creation timestamp' })
  createdAt: Date;
}
