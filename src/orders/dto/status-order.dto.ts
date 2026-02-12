import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from './orden-status.enum';

export class StatusOrderDto {
  @IsOptional()
  @IsEnum(OrderStatus, {
    message: `Estatus: su valor es uno de: ${Object.values(OrderStatus).join(', ')}`,
  })
  status: OrderStatus = OrderStatus.PENDING;
}
