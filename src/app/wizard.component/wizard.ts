import { Component } from '@angular/core';

export class Wizard {
  face: string;
  house: string;
  name: string;
  cssClass: string;
  id: string;
  uniqueID: number;
  private wizardImageFiles = [];

  constructor(name:string, house:string, face:string, cssClass:string, uniqueID: number)
  {
    this.face = face;
    this.house = house;
    this.name = name;
    this.cssClass = cssClass;
    this.id = name;
    this.uniqueID = uniqueID;
  }
  getName(){
    return this.name;
  }
  getHouse(){
    return this.house;
  }
  setName(name:string){
    this.name = name;
  }
  setHouse(house:string){
    this.house = house;
  }
  toggleState(state: string): void{
    if(state == 'active'){
        state = 'inactive';
    }
    else{
        state = 'active';
    }
  }
}