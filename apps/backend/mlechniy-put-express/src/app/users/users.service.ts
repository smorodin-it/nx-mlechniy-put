import { ResponseCreate, ResponseStatus } from '@nx-mlechniy-put/shared/api';
import { PrismaClient, User } from '@prisma/client';
import { UserDto } from './users.dto';

const prisma = new PrismaClient();

export const listUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export const retrieveUserByUuid = async (userUuid: string): Promise<User> => {
  return prisma.user.findFirst({
    where: {
      uuid: userUuid,
    },
  });
};

export const retrieveUserByEmail = async (email: string): Promise<User> => {
  return prisma.user.findFirst({
    where: {
      email,
    },
  });
};

export const createUser = async (
  userData: UserDto
): Promise<ResponseCreate> => {
  const user = await prisma.user.create({ data: userData });

  return {
    id: user.uuid,
  };
};

export const updateUser = async (
  userUuid: string,
  userData: UserDto
): Promise<ResponseStatus> => {
  const user = await prisma.user.update({
    where: {
      uuid: userUuid,
    },
    data: userData,
  });

  if (user) {
    return {
      status: true,
    };
  }
};

export const deleteUser = async (userUuid: string): Promise<ResponseStatus> => {
  const user = await prisma.user.delete({
    where: {
      uuid: userUuid,
    },
  });
  if (user) {
    return {
      status: true,
    };
  }
};
