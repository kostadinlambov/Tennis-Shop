import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsersService } from '../../components/users/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegisterGuard implements CanActivate {
  constructor(private usersService: UsersService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.check();
  }

  check() {
    if (!this.usersService.checkIfLoggedIn()) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
