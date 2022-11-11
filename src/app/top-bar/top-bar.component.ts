import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  
  notificationMessage:string='';

  constructor(
    private notification :NotificationService

  ){
  }

  ngOnInit() {
    this.notification.NotificationSubject.subscribe(arg => {
      this.notificationMessage=arg
    }
      );
    
  }
hello(){
  console.log('hello world');

  console.log('%c%s', 'color: #ff0000', 'ashik');
  
}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/