import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { PERMISSION } from '../constants/permission.constant';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanActivate {
  constructor(private _router: Router, private _userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const permission = (route.data?.permission || []) as PERMISSION[];

    const hasPermission = permission.every((p) => this._userService.hasPermission(p));

    if (hasPermission) {
      return true;
    }

    this._router.navigate(['']);

    return false;
  }
}
