import { Wizard } from './wizard';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
    selector : 'selected-wizard',
    template:`<div *ngIf="wizard">
  <h2>{{wizard.name}} selected!</h2>
  <div>
    <label>name: </label>{{wizard.getName()}}</div>
  <button (click)="goBack()">Back</button>
</div>`,
    styleUrls: []
})

export class SelectedWizardComponent{

}