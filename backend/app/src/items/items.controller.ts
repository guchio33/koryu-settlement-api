import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
// import { ItemStatus } from './item-status.model';
import { CreateItemDto } from './dto/create_item_dto';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    console.log(id);
    return this.itemsService.findById(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Patch(':id')
  async updateStatus(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.itemsService.delete(id);
  }
}
