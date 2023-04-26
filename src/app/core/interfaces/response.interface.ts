import { File } from "@models/file.model";
import { Folder } from "@models/folder.model";
import { User } from "@models/user.model";

export interface IUserCreated {
  ok: boolean;
  user: User;
  token: string;
  root?: Folder;
  status?: number;
  msg?: string;
}

export interface IFolderCreated {
  ok: boolean;
  folder: Folder;
  msg: string;
}

export interface IFolderResponse {
  ok: boolean,
  folder: Folder,
}

export interface IFileResponse {
  ok: boolean,
  msg: string,
  files: File[]
}
