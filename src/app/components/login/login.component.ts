import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { StaticDataService } from '../../services/static-data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginObj = {
		un:'ben',
		pass:'benpassword'
  };
  
  loginForm : FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
  	//this.loginObj = Object.assign({}, StaticDataService.loginObj);
  }

  ngOnInit() {
    StaticDataService.loginErr = false;
    StaticDataService.isLoggedIn = false;

      this.loginForm = this.fb.group({
        username: [null, Validators.compose([Validators.required])],
        password:  [null, Validators.compose([Validators.required])]
      });
    
  }

  login(){
    console.log(this.loginObj.un+":"+this.loginObj.pass);
  	StaticDataService.auth.key = btoa(this.loginObj.un+":"+this.loginObj.pass);
  	this.router.navigate(['/fileupload']);
  }

  get SD(){
    return StaticDataService;
  }

}
