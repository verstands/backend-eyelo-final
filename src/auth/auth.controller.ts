import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthEnseignantDto } from 'src/dto/authEnseignantdto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}
  @Post('enseignant')
  async login(@Body() authBody: AuthEnseignantDto) {
    return await this.authservice.authEnseignant(authBody);
  }
}
