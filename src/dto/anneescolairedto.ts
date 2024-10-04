import { IsNotEmpty } from 'class-validator';
export class AnneeScolaireDto {
  @IsNotEmpty({
    message: 'Le champ date debut est obligatoire',
  })
  datedebut: string;
  @IsNotEmpty({
    message: 'Le champ date fin obligatoire',
  })
  datefin: string;
  @IsNotEmpty({
    message: 'Le champ statut obligatoire',
  })
  statut: string;
}
