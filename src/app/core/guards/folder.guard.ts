import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';

import { Observable, tap } from 'rxjs';

import { FolderService } from '@services/folder.service';

import { isMongoId } from '@utils/mongo.util';

@Injectable({
  providedIn: 'root'
})
export class FolderGuard implements CanActivate {

  constructor(
    private folderService: FolderService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const folderId = route.params['folderId'];
    if(!isMongoId(folderId)) return this.router.navigate(['/']);
    return this.folderService.getFolder(folderId).pipe(tap((hasAccess: boolean) => {
      if(!hasAccess) {
        return this.router.navigate(['/']);
      }
    }));
  }
}
