import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ClasseService } from './classe.service';
import { ClasseDto } from 'src/dto/classedto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('classe')
export class ClasseController {
  constructor(private readonly all: ClasseService) {}
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
  async createAgenda(@Body() data: ClasseDto) {
    return await this.all.create(data);
  }
}
