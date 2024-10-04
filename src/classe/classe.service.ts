import { Injectable } from '@nestjs/common';
import { ClasseDto } from 'src/dto/classedto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClasseService {
  constructor(private readonly prismaservice: PrismaService) {}

  async get() {
    const data = await this.prismaservice.classes.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.classes.findUnique({
      where: {
        id: id,
      },
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & ClasseDto) {
    const update = await this.prismaservice.classes.update({
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
    await this.prismaservice.classes.delete({
      where: {
        id,
      },
    });
    return { message: 'fonction supprimé avec success ' };
  }

  async create(dataall: ClasseDto) {
    const createAgent = await this.prismaservice.classes.create({
      data: dataall,
    });
    return createAgent;
  }
}
