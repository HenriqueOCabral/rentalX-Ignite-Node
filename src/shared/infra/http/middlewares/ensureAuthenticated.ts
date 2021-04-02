import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
  request: Request, response: Response, next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Missing Token', 401);
  }

  // token Bearer + hash

  const [, token] = authHeader.split(' ');
  try {
    const { sub: user_id } = verify(token, '8f303515d29cb64e82f67068ccf8c08e') as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists', 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError('Missing or invalid Token', 401);
  }
}
