import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Harry Potter';
  character : Character = {
    name : 'Harry Potter',
    dob : new Date(7/31/1980),
    address: "NO.4 Privet Dr, London",
    school: "Hogwartz"
  };
}

export class Character {
  name : string;
  dob : Date;
  address: string;
  school: string;
}