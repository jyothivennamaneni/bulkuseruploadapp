import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';

import { AuthGuardGuard } from '../guards/auth-guard.guard';


const routes: Routes = [
	{
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'fileupload',
        component: FileUploadComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
