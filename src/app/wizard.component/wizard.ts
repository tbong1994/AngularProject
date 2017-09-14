import { Component } from '@angular/core';

export class Wizard {
  face: string;
  house: string;
  name: string;
  cssClass: string;
  id: number;
  private wizardImageFiles = [];

  constructor(name:string, house:string, face:string, cssClass:string, id: number)
  {
    this.face = face;
    this.house = house;
    this.name = name;
    this.cssClass = cssClass;
    this.id = id;
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