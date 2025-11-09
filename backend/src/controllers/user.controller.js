import * as UserService from '../services/user.service.js';

export const getAllUsers = async (ctx) => {
  const users = await UserService.getUsers();
  ctx.body = { status: 'success', data: users };
};

export const createUser = async (ctx) => {
  const { email, name } = ctx.request.body;
  const user = await UserService.createUser({ email, name });
  ctx.body = { status: 'success', data: user };
};
