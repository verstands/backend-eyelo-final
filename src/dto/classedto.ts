import { IsNotEmpty } from 'class-validator';
export class ClasseDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;
  @IsNotEmpty({
    message: 'Le champ ecole obligatoire',
  })
  id_ecole: string;

  @IsNotEmpty({
    message: 'Le champ date obligatoire',
  })
  date: string;
}
