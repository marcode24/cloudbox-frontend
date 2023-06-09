import { IPermission } from "@interfaces/permision.interface";

import { File } from "./file.model";
import { User } from "./user.model";

export class Folder {
  name: string;
  size: number;
  permission: IPermission[];
  owner: User;
  createdAt: Date;
  updatedAt: Date;
  parent: Folder | null;
  type: string;
  folders: Folder[];
  files: File[];
  color: string;
  _id?: string;
  __v?: number;
  path?: Folder[];
}
