import { faker } from '@faker-js/faker';

import { Folder } from '@models/folder.model';

import { getOneUserMock } from './user.mock';

export const getOneFolderMock = (): Folder => ({
  name: faker.system.fileName(),
  size: faker.datatype.number(),
  permission: [],
  owner: {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    image: faker.image.avatar(),
    active: faker.datatype.boolean(),
    darkMode: faker.datatype.boolean(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    rootFolder: null,
    totalSpace: faker.datatype.number(),
    usedSpace: faker.datatype.number(),
    _id: faker.datatype.uuid(),
  },
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
  parent: null,
  type: faker.system.fileType(),
  folders: [],
  files: [],
  color: faker.internet.color(),
  path: [],
  _id: faker.datatype.uuid(),
  __v: faker.datatype.number(),
});
