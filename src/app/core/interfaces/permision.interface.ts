import { User } from "@models/user.model";

export interface IPermission {
  read: boolean;
  write: boolean;
  execute: boolean;
  user: User;
}
