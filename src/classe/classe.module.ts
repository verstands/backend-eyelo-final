import { Module } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { ClasseController } from './classe.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ClasseService, PrismaService],
  controllers: [ClasseController],
})
export class ClasseModule {}
