import { IPermission } from "@interfaces/permision.interface";

import { Folder } from "./folder.model";
import { User } from "./user.model";

export class File {
  name: string;
  cloudName: string;
  size: number;
  permision: IPermission[];
  owner: User;
  createdAt: Date;
  updatedAt: Date;
  folder: Folder;
  type: string;
  _id?: string;
}
