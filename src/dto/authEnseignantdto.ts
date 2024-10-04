import { IsNotEmpty } from 'class-validator';
export class AuthEnseignantDto {
  @IsNotEmpty({
    message: 'Le champ email est obligatoire',
  })
  email: string;
  @IsNotEmpty({
    message: 'Le champ mot de passe obligatoire',
  })
  mdp: string;
}
