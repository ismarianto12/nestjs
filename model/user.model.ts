// prisma/user.model.ts

import { Prisma } from '.prisma/client';

export class User implements Prisma.UserCreateInput {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  lastActivityAt?: Date;
  email: string;
  emailVerified?: Date;
  name: string;
  password: string;
  workspace: string;
  workspaceld: string;
  role: 'admin' | 'user';
  Session: string;
  Account: string;
  ApiToken: string;
}



export class UserCreateInput implements Prisma.UserCreateInput {
  email: string;
  name: string;
  password: string;
  // ... other fields needed for create
}
