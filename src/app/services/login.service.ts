import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import { StaticDataService } from '../services/static-data.service';

@Injectable()
export class LoginService {
	headers:any;

  	constructor(private http: HttpClient) { }

	getAuth():any{
		this.headers = new HttpHeaders({
			'withCredentials' : 'true',
			'Authorization': 'Basic '+StaticDataService.auth.key
		});
        	return this.http.post(environment.loginServiceEndpoint, {}, {headers:this.headers});
	}
}
