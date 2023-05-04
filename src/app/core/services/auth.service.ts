import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

import { Observable, catchError, map, of } from 'rxjs';

import { Folder } from '@models/folder.model';
import { User } from '@models/user.model';

import { IUserCreated } from '@interfaces/response.interface';
import { ICreateAccount, ILogin } from '@interfaces/user.interface';

import Storage from '@utils/storage.util';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userActive: User;

  get headers() {
    return {
      headers: {
        'x-token': Storage.getLocalStorage('token') || ''
      }
    };
  }

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
    return this.http.post<IUserCreated>(url, data).pipe(map((resp) => {
      this.userActive = resp.user;
      Storage.savelocalStorage('token', resp.token);
      return resp;
    }));
  }

  validateToken(): Observable<boolean> {
    const url = `${base_url}/auth/renew`;
    return this.http.get<IUserCreated>(url, this.headers)
      .pipe(map((resp) => {
        this.userActive = resp.user;
        this.userActive.rootFolder = resp.root as Folder;
        Storage.removeLocalStorage('token');
        Storage.savelocalStorage('token', resp.token);
        return true;
    }), catchError(() => of(false)));
  }

  logout(): void {
    Storage.removeLocalStorage('token');
    this.router.navigateByUrl('/login');
  }
}
