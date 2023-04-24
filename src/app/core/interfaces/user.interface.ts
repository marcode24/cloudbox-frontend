export interface ICreateAccount {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
  remember: boolean;
}
