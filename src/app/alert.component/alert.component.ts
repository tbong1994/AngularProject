import { Input, Component } from '@angular/core';
import { $ } from 'jquery';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngb-alert',
  templateUrl: 'alert.component.html',
  styleUrls:['alert.component.css'],
  providers: [NgbAlertConfig]
})
export class ngbAlertConfig {

  @Input()
  public alerts: Array<IAlert> = [];
  public alert: IAlert;

  constructor() {
    this.alert.id = 0;
    this.alert.type = "custom";
    this.alert.message = "Authentication Failed".toUpperCase();
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
