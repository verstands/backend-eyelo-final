import { Module } from '@nestjs/common';
import { AnneescolaireController } from './anneescolaire.controller';
import { AnneescolaireService } from './anneescolaire.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AnneescolaireController],
  providers: [AnneescolaireService, PrismaService],
})
export class AnneescolaireModule {}
