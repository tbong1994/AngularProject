import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Wizard } from './wizard.component/wizard';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const wizards = [
      harryPotter,ronaldWeasley,hermioneGranger,severusSnape,voldemort
    ];
    const wizardImageFiles = [
      harryPotter.face, ronaldWeasley.face, hermioneGranger.face, severusSnape.face, voldemort.face
    ];
    return {wizards, wizardImageFiles};
  }
}

let harryPotter = new Wizard('Harry Potter','Gryffindor','../../assets/img/harrypotter.jpg','wizardFace');
let ronaldWeasley = new Wizard('Ronald Weasley','Gryffindor','../../assets/img/ron.jpg','wizardFace');
let hermioneGranger = new Wizard('Hermione Granger','Gryffindor','../../assets/img/hermione.jpg','wizardFace');
let severusSnape = new Wizard('Severus Snape','Slytherin','../../assets/img/snape.jpg','wizardFace');
let voldemort = new Wizard('Voldemort','Slytherin','../../assets/img/voldemort.jpg','wizardFace');