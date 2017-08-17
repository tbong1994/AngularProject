import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Wizard } from './wizard.component/wizard';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const wizards = [
      harryPotter,ronaldWeasley,hermioneGranger,severusSnape,voldemort
    ];
    const wizardImageFiles = [
      '../../assets/img/harrypotter.jpg',
      '../../assets/img/ron.jpg',
      '../../assets/img/hermione.jpg',
      '../../assets/img/snape.jpg',
      '../../assets/img/voldemort.jpg'
    ];
    return {wizards, wizardImageFiles};
  }
}

let harryPotter = new Wizard('../../assets/img/harrypotter.jpg','Gryffindor','Harry Potter','wizardFace');
let ronaldWeasley = new Wizard('../../assets/img/ron.jpg','Gryffindor','Ronald Weasley','wizardFace');
let hermioneGranger = new Wizard('../../assets/img/hermione.jpg','Gryffindor','Hermione Granger','wizardFace');
let severusSnape = new Wizard('../../assets/img/snape.jpg','Slytherin','Severus Snape','wizardFace');
let voldemort = new Wizard('../../assets/img/voldemort.jpg','Slytherin','Voldemort','wizardFace');