import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

import { Observable, map } from 'rxjs';

import { IUserCreated } from '@interfaces/response.interface';
import { ICreateAccount, ILogin } from '@interfaces/user.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createAccount(data: ICreateAccount): Observable<IUserCreated> {
    const url = `${base_url}/user`;
    return this.http.post<IUserCreated>(url, data);
  }

  login(data: ILogin): Observable<IUserCreated> {
    const url = `${base_url}/auth/login`;
    return this.http.post<IUserCreated>(url, data);
  }
}
