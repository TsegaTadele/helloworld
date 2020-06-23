import { Injectable } from '@angular/core';
import { AuthGaurd } from './auth-gaurd.service';
@Injectable()
export class AdminAuthGuard extends AuthGaurd {
  canActivate() {
    const isAuthenticated = super.canActivate();
    if (!isAuthenticated) {
      return false;
    }

    if (this.authService.currentUser.admin) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }
}
