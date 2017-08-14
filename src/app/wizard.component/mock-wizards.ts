import { Wizard } from './wizard';

let harryPotter = new Wizard('../../assets/img/harrypotter.jpg','Gryffindor','Harry Potter','wizardFace');
let ronaldWeasley = new Wizard('../../assets/img/ron.jpg','Gryffindor','Ronald Weasley','wizardFace');
let hermioneGranger = new Wizard('../../assets/img/hermione.jpg','Gryffindor','Hermione Granger','wizardFace');
let severusSnape = new Wizard('../../assets/img/snape.jpg','Slytherin','Severus Snape','wizardFace');
let voldemort = new Wizard('../../assets/img/voldemort.jpg','Slytherin','Voldemort','wizardFace');

export const WIZARDS: Wizard[] = [
  harryPotter,ronaldWeasley,hermioneGranger, severusSnape, voldemort
];