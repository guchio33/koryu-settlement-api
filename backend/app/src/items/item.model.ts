// import { ItemStatus } from './item-status.model';
import { ItemStatus } from '@prisma/client';

export interface Item {
  id: string;
  name: string;
  price: number;
  description?: string;
  status: ItemStatus;
}
