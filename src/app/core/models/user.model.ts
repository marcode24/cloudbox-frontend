import { Folder } from "./folder.model";

export class User {
  email: string;
  password: string;
  name: string;
  surname: string;
  image: string;
  active: boolean;
  darkMode: boolean;
  createdAt: Date;
  updatedAt: Date;
  rootFolder: Folder;
  totalSpace: number;
  usedSpace: number;
  _id?: string;
}
