import { Wizard } from './wizard';
import { WizardService } from './wizard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {slideIn} from './wizard.animation';

@Component({
  selector: 'wizard-component',
  templateUrl: './wizard.html',
  styleUrls: ['./wizard.component.css'],
  // animations: [slideIn],
})

@Injectable()
export class WizardComponent implements OnInit {
  @Input() _wizard: Wizard;
  private wizards : Wizard[];
  private selectedWizard : Wizard;
  public slideIn;

  constructor(private router: Router, private wizService: WizardService, private location: Location){
    //constructor should not have complex logic(ie; data access method, etc).
  }

  ngOnInit(): void {
    this.getWizards();
    this.slideIn = 'in';
  }

  getWizards(): void{
    this.wizService.getWizards().then(wizards => this.wizards = wizards); //getWizards() from the service class returns a promise, not the array itself
  }

  getSelectedWizard(){
    return this.selectedWizard;
  }

  onSelect( wizard: Wizard){
    this.selectedWizard = wizard;
  }

  goToDetail(selectedWizard:Wizard): void{
    this.router.navigate(['/wizard', selectedWizard.name]);
  }

  create(name: string, house:string): void{
    name = name.trim();
    house = house.trim();
    if(!name || !house) {return;}//show some sort of warning
    const face = this.getWizardImageFile(); //pick random image
    let result = this.wizService.create(name, house, face);
    result.then((wizard) => {
      /*TODO: //indicate that this wizard has been created i.e)Wizard xyz has been created successfully! */
    });
  }
  
  remove(): void{
    if(!this.selectedWizard.name){return;}
    this.wizService.delete(this.selectedWizard)
    .then((wizard) => {
      this.wizards = this.wizards.filter(wiz => wiz !== wizard);
      if(this.selectedWizard === wizard){wizard = null;}
    })
  }

  getWizardImageFile(): string{
    const wizFaces = ["../../assets/img/malfoy.jpg",
    "../../assets/img/dumbledore.jpg",
    "../../assets/img/sirius.jpg",
    "../../assets/img/neville.jpg"];
    return wizFaces[Math.floor(Math.random()*(3-0 + 0))];
  }
}