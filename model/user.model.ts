export class User {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  lastActivityAt?: Date | null;
  email: string;
  emailVerified?: Date | null;
  name: string;
  password: string;
  workspace: string;
  workspaceld: string;
  role: 'admin' | 'user';
  Session: string;
  Account: string;
  ApiToken: string;
}





