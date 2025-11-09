import * as UserModel from '../models/user.model.js';

export async function getUsers() {
  return await UserModel.findAll();
}

export async function createUser(data) {
  return await UserModel.insert(data);
}
