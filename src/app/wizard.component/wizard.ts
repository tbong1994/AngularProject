import { Component } from '@angular/core';

export class Wizard {
  face: string;
  house: string;
  name: string;
  cssClass: string;
  id: string;
  
  constructor(face:string, house:string, name:string, cssClass:string)
  {
    this.face = face;
    this.house = house;
    this.name = name;
    this.cssClass = cssClass;
    this.id = name;
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
  onClick(){
    /*TODO: do something when each character is clicked*/ 
  }
}