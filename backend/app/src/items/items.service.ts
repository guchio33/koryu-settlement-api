import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.model';
import { CreateItemDto } from './dto/create_item_dto';
import { ItemsRepository } from './items.repository';
@Injectable()
export class ItemsService {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  async findAll(): Promise<Item[]> {
    return this.itemsRepository.findAll();
  }

  async findById(id: string): Promise<Item> {
    const item = this.itemsRepository.findById(id);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsRepository.create(createItemDto);
  }

  async updateStatus(id: string): Promise<Item> {
    return this.itemsRepository.updateStatus(id);
  }

  async delete(id: string): Promise<void> {
    this.itemsRepository.delete(id);
  }
}
