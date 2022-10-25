import { Component,ViewChild,AfterViewInit } from '@angular/core';
import {TopBarComponent} from '../app/top-bar/top-bar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TopBarComponent) top:any;
  ngAfterViewInit() {
    this.top.hello() 
    // I am cool
  }}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/