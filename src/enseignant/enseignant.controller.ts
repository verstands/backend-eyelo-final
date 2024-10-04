import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EnseignantService } from './enseignant.service';
import { EnseignantDto } from 'src/dto/enseignantdto';

@Controller('enseignant')
export class EnseignantController {
  constructor(private readonly all: EnseignantService) {}
  @Get()
  get() {
    return this.all.get();
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.all.getId({
      id,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.all.delete({ id });
  }

  @Post()
  async create(@Body() data: EnseignantDto) {
    return await this.all.create(data);
  }
}
