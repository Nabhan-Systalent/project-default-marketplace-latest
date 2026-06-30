import { ApiProperty } from '@nestjs/swagger';

export class OrderResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  vendorId: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  amount: number;
}
