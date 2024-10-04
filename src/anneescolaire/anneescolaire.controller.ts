import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AnneescolaireService } from './anneescolaire.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AnneeScolaireDto } from 'src/dto/anneescolairedto';

@UseGuards(JwtAuthGuard)
@Controller('anneescolaire')
export class AnneescolaireController {
  constructor(private readonly all: AnneescolaireService) {}
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
  async createAgenda(@Body() data: AnneeScolaireDto) {
    return await this.all.create(data);
  }
}
