import { ItemStatus } from './item-status.model';

export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  status: ItemStatus;
}
