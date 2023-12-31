import { Injectable } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';
@Injectable()

export class PrismaService {
  constructor(readonly prisma: PrismaClient) { }

  get user() {
    return this.prisma.user;
  }
}

