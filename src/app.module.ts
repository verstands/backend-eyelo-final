import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AnneescolaireModule } from './anneescolaire/anneescolaire.module';
import { ClasseModule } from './classe/classe.module';
import { EnseignantModule } from './enseignant/enseignant.module';
@Module({
  imports: [AuthModule, AnneescolaireModule, ClasseModule, EnseignantModule],
})
export class AppModule {}
