import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public NotificationSubject=new Subject<string>()

  constructor() { }
//send data to unrelated components using services
  sendNotification(data:string){
    this.NotificationSubject.next(data)
  }
}
