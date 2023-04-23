import { IPermission } from "@interfaces/permision.interface";

import { User } from "./user.model";

export class Folder {
  name?: string;
  size: number;
  permission: IPermission[];
  owner: User;
  createdAt: Date;
  updatedAt: Date;
  parent: Folder;
  folders: Folder[];
  files: File[];
  _id?: string;
}
