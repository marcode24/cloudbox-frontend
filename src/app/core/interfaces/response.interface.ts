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
