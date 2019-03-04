import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from "ng2-file-upload";
import {CustomMaterialModule} from "../components/file-upload/material.module";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/root/app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoginComponent } from '../components/login/login.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component'
import { LoginService } from '../services/login.service';
import { AuthGuardGuard } from '../guards/auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FileUploadComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    CustomMaterialModule,
    FileUploadModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: FileUploadComponent}
    ]),
  ],
  providers: [AuthGuardGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
