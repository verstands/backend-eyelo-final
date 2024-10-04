import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { AuthEnseignantDto } from 'src/dto/authEnseignantdto';
import { PrismaService } from 'src/prisma.service';
import { UserPayload } from 'src/userperload';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async authEnseignant(data: AuthEnseignantDto) {
    const emailExiste = await this.prismaService.enseignants.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!emailExiste) {
      throw new HttpException("L'email n'existe pas", HttpStatus.CONFLICT);
    }

    const isPasswordValide = await this.isPasswordValide(
      data.mdp,
      emailExiste.mdp,
    );
    if (!isPasswordValide) {
      throw new HttpException(
        'Mot de passe est incoorect',
        HttpStatus.CONFLICT,
      );
    }

    const token = await this.authenticateUser({
      userid: emailExiste.id,
    });

    return {
      token: token,
      data: emailExiste,
    };
  }

  private async hasPassword(password: string) {
    const hashePassword = await hash(password, 10);
    return hashePassword;
  }

  private async isPasswordValide(password: string, hashPassword: string) {
    const isPasswordValide = await compare(password, hashPassword);
    return isPasswordValide;
  }

  private async authenticateUser(user: { userid: string }) {
    const payload: UserPayload = { userid: user.userid };
    return {
      access_token: await this.jwtService.sign(payload),
    };
  }
}
