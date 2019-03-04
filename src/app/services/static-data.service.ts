import { Injectable } from '@angular/core';

@Injectable()
export class StaticDataService {
	static auth = {
		key:''
	};
	static loginErr = false;
	static isLoggedIn = false;
}
