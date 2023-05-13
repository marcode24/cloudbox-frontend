import { faker } from '@faker-js/faker';

import { User } from '@models/user.model';

import { getOneFolderMock } from './folder.mock';

export const getOneUserMock = (): User => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
  name: faker.name.firstName(),
  surname: faker.name.lastName(),
  image: faker.image.avatar(),
  active: faker.datatype.boolean(),
  darkMode: faker.datatype.boolean(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
  rootFolder: getOneFolderMock(),
  totalSpace: faker.datatype.number(),
  usedSpace: faker.datatype.number(),
  _id: faker.datatype.uuid(),
});
