import { faker } from '@faker-js/faker';

import { File } from "@models/file.model";

import { getOneFolderMock } from './folder.mock';

export const getOneFileMock = (): File => ({
  name: faker.system.fileName(),
  cloudName: faker.system.fileName(),
  size: faker.datatype.number(),
  permision: [],
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
    rootFolder: getOneFolderMock(),
    totalSpace: faker.datatype.number(),
    usedSpace: faker.datatype.number(),
    _id: faker.datatype.uuid(),
  },
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
  folder: getOneFolderMock(),
  type: faker.system.fileType(),
  _id: faker.datatype.uuid(),
  color: faker.internet.color(),
  path: [],
});

export const getManyFilesMock = (quantity: number): File[] => {
  return Array.from({ length: quantity }).map(() => getOneFileMock());
};
