import { Input, Component } from '@angular/core';

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
    // this.alerts.push({
    //   id: 1,
    //   type: 'success',
    //   message: 'Invalid Username and Password',
    // });
    this.alert = {id:1, type:'invalid',message:'invalid Username and Password'};
    /*{
    //   id: 2,
    //   type: 'info',
    //   message: 'This is an info alert',
    // }*/
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  public closeAlert() {
  }

  public reset() {
    this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
