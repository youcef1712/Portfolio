import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 'Avancé' },
    { name: 'Spring Boot', level: 'Intermédiaire' },
    { name: 'Java', level: 'Confirmé' },
    { name: 'JavaScript', level: 'Confirmé' },
    { name: 'C# / .NET / MonoGame', level: 'Intermédiaire' },
    { name: 'Python', level: 'Intermédiaire' },
    { name: 'PHP / MySQL', level: 'Intermédiaire' },
    { name: 'HTML / CSS / Bootstrap', level: 'Confirmé' },
    { name: 'XML, XSD, XSLT', level: 'Intermédiaire' },
    { name: 'Git / GitHub', level: 'Confirmé' },
    { name: 'Slack, Jira', level: 'Bonne pratique' },
    { name: 'Méthodologie Agile', level: 'Utilisée en projet' }
  ];
}
