import { User } from '@prisma/client';

type ExcludeTypes = 'id' | 'uuid' | 'createdAt' | 'updatedAt';

export interface UserIdParam {
  userId: string;
}

export interface UserEmailParam {
  email: string;
}

export type UserDto = Omit<User, ExcludeTypes>;
