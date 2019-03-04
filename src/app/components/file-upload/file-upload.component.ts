import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileUploader} from "ng2-file-upload";
import {Observable} from "rxjs";
import { StaticDataService } from '../../services/static-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  uploadForm: FormGroup;

  public uploader:FileUploader = new FileUploader({
    isHTML5: true,
    queueLimit : 1
  });
  msg:string = '';
  errorMsg:any = '';
  dataSource:any;
  columnsToDisplay = ['id', 'firstName','lastName','email','phoneNumber'];

  constructor(private fb: FormBuilder, private http: HttpClient ) { }

  uploadSubmit(){
          let fileItem = this.uploader.queue[0]._file;
          if(fileItem.size > 1048576){
            this.errorMsg = ["File should be less than 1 MB of size."];
            return;
          }
        
        let data = new FormData();
        data.append('file',fileItem);
        this.uploadFile(data).subscribe(data => {
          this.msg="Upload Successful and below users created.";
          this.errorMsg=null;
          this.dataSource = data;
      },
        err => {
          console.log(JSON.stringify(err));
          this.errorMsg=err.error;
          this.msg="";
        }
        );
        this.uploader.clearQueue();
  }

  headers:any;

  uploadFile(data: FormData): Observable<any> {
    this.headers = new HttpHeaders({
			'withCredentials' : 'true',
			'Authorization': 'Basic '+StaticDataService.auth.key
		});
    return this.http.post(environment.fileUploadEndpoint, data,{headers: this.headers});
  }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      document: [null, Validators.compose([Validators.required])]
    });
  }

}


