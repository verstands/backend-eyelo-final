import { Injectable } from '@nestjs/common';
import { AnneeScolaireDto } from 'src/dto/anneescolairedto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnneescolaireService {
  constructor(private readonly prismaservice: PrismaService) {}

  async get() {
    const data = await this.prismaservice.annescolaires.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.annescolaires.findUnique({
      where: {
        id: id,
      },
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & AnneeScolaireDto) {
    const update = await this.prismaservice.annescolaires.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return update;
  }

  async delete({ id }: { id: string }) {
    await this.prismaservice.annescolaires.delete({
      where: {
        id,
      },
    });
    return { message: 'fonction supprimé avec success ' };
  }

  async create(applicationdto: AnneeScolaireDto) {
    const createAgent = await this.prismaservice.annescolaires.create({
      data: applicationdto,
    });
    return createAgent;
  }
}
