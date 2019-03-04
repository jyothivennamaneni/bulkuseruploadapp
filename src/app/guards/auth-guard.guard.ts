import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

import { StaticDataService } from '../services/static-data.service';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {
	constructor(private router: Router, private loginSrvc: LoginService) { }

  	canActivate(
		  next: ActivatedRouteSnapshot,
		  state: RouterStateSnapshot
	):Observable<boolean>|Promise<boolean>|boolean {
		return new Promise((resolve, reject) => {
			this.loginSrvc.getAuth().toPromise().then( (res:boolean) => {
				if(!res){
					this.router.navigate(['/login']);
				}
				StaticDataService.loginErr = res;
				StaticDataService.isLoggedIn = true;
				resolve(res);
			}).catch( (err:any) => {
				StaticDataService.loginErr = true;
				StaticDataService.isLoggedIn = false;
				this.router.navigate(['/login']);
				resolve(false);
			});
		});
  	}
}
