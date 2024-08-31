import { Injectable, Get } from '@nestjs/common';
import { Item } from './item.model';
import { ItemStatus } from './item-status.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  @Get()
  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: Item): Item {
    // console.log('item', item);
    this.items.push(item);
    // console.log(this.items);
    return item;
  }

  updateStatus(id: string): Item {
    const item = this.findById(id);
    item.status = ItemStatus.SOLD_OUT;
    return item;
  }

  delete(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
