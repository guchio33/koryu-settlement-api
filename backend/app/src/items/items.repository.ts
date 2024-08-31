import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ItemStatus } from './item-status.model';
import { CreateItemDto } from './dto/create_item_dto';
import { v4 as uuid } from 'uuid';
import { Item } from './item.model';

@Injectable()
export class ItemsRepository {
  private prisma = new PrismaClient();

  async findAll(): Promise<Item[]> {
    return this.prisma.item.findMany();
  }

  async findById(id: string) {
    return this.prisma.item.findUnique({
      where: { id },
    });
  }

  async create(createItemDto: CreateItemDto) {
    return this.prisma.item.create({
      data: {
        id: uuid(),
        ...createItemDto,
        status: ItemStatus.ON_SALE,
      },
    });
  }

  async updateStatus(id: string) {
    return this.prisma.item.update({
      where: { id },
      data: { status: ItemStatus.SOLD_OUT },
    });
  }

  async delete(id: string) {
    return this.prisma.item.delete({
      where: { id },
    });
  }
}
