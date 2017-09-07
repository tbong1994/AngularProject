import { Input, Component } from '@angular/core';
import { $ } from 'jquery';
@Component({
  selector: 'login-alert',
  templateUrl: 'login.alert.component.html'
})
export class NgbdAlertCloseable {

  @Input()
  public alerts: Array<IAlert> = [];
  public alert: IAlert;

  private backup: Array<IAlert>;

  constructor() {
    this.alert = {id:1, type:'invalid',message:'invalid Username and Password'};
  }

  public closeAlert() {
    // this.alert.message = "";
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
