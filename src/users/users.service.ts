import { Injectable } from '@nestjs/common';

export type User = {
  userId: string;
  password: string;
  username: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: '1',
      username: 'qpeela',
      password: '123456',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
