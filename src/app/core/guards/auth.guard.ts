import { Injectable } from '@angular/core';
import { CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/api/authentication.service';

import { TokenService } from '@core/services/token.service';

/**
 * sso token verify
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private _tokenService: TokenService,
    private _authenticationService: AuthenticationService
  ) {}

  /**
   * SSo token verify child
   *
   * @returns is member
   */
  canActivateChild():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this._tokenService.accessToken) {
      this._authenticationService.logout().subscribe();

      return false;
    }

    return true;
  }
}
