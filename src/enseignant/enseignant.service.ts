import { Injectable } from '@nestjs/common';
import { EnseignantDto } from 'src/dto/enseignantdto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EnseignantService {
  constructor(private readonly prismaservice: PrismaService) {}

  async get() {
    const data = await this.prismaservice.enseignants.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.enseignants.findUnique({
      where: {
        id: id,
      },
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & EnseignantDto) {
    const update = await this.prismaservice.enseignants.update({
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
    await this.prismaservice.enseignants.delete({
      where: {
        id,
      },
    });
    return { message: 'fonction supprimé avec success ' };
  }

  async create(dataall: EnseignantDto) {
    const createAgent = await this.prismaservice.enseignants.create({
      data: dataall,
    });
    return createAgent;
  }
}
