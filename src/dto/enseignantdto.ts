import { IsNotEmpty } from 'class-validator';
export class EnseignantDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;
  @IsNotEmpty({
    message: 'Le champ prenom obligatoire',
  })
  prenom: string;

  @IsNotEmpty({
    message: 'Le champ postnom obligatoire',
  })
  postnom: string;

  @IsNotEmpty({
    message: 'Le champ email  obligatoire',
  })
  email: string;

  @IsNotEmpty({
    message: 'Le champ sexe  obligatoire',
  })
  sexe: string;

  @IsNotEmpty({
    message: 'Le champ numero  obligatoire',
  })
  numero: string;

  @IsNotEmpty({
    message: 'Le champ mdp  obligatoire',
  })
  mdp: string;

  @IsNotEmpty({
    message: 'Le champ date  obligatoire',
  })
  date: string;

  @IsNotEmpty({
    message: 'Le champ classe  obligatoire',
  })
  id_classe: string;

  @IsNotEmpty({
    message: 'Le champ statut  obligatoire',
  })
  statut: string;
}
