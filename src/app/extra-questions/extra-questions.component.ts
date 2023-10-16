import { Component } from '@angular/core';

@Component({
  selector: 'app-extra-questions',
  templateUrl: './extra-questions.component.html',
  styleUrls: ['./extra-questions.component.css']
})
export class ExtraQuestionsComponent {

  codeText: string = `
  const thisIsMyMap = new Map();

  thisIsMyMap.set('Aftenfalk', {latinName: 'Falco vespertinus', size: '34cm'});

  thisIsMyMap.get('Aftenfalk') // gets {latinName: 'Falco vesperinus', size: '34cm'};
  `;

  constructor(){}

}
