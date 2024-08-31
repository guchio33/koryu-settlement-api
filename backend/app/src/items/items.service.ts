import { Injectable, Get, NotFoundException } from '@nestjs/common';
import { Item } from './item.model';
import { ItemStatus } from './item-status.model';
import { CreateItemDto } from './dto/create_item_dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ItemsService {
  private items: Item[] = [];
  @Get()
  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    const found = this.items.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  create(createItemDto: CreateItemDto): Item {
    const item: Item = {
      id: uuid(),
      ...createItemDto,
      status: ItemStatus.ON_SALE,
    };
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
