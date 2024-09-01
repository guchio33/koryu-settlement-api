import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
// import { ItemStatus } from './item-status.model';
import { CreateItemDto } from './dto/create_item_dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
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
  @UseGuards(JwtAuthGuard)
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateStatus(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.itemsService.delete(id);
  }
}
