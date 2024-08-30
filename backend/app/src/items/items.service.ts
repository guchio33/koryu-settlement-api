import { Injectable, Get } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  @Get()
  findAll() {
    return 'hello items';
  }

  create(item: Item): Item {
    console.log('item', item);
    this.items.push(item);
    console.log(this.items);
    return item;
  }
}
