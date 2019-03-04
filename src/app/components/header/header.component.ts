import { Component, OnInit } from '@angular/core';
import {StaticDataService} from '../../services/static-data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  get SD(){
    return StaticDataService;
  }
}
