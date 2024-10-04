import { Module } from '@nestjs/common';
import { EnseignantService } from './enseignant.service';
import { EnseignantController } from './enseignant.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [EnseignantService, PrismaService],
  controllers: [EnseignantController],
})
export class EnseignantModule {}
