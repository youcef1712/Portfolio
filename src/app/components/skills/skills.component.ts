import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 'Avancé', percentage: 90 },
    { name: 'Spring Boot', level: 'Intermédiaire', percentage: 70 },
    { name: 'Java', level: 'Confirmé', percentage: 85 },
    { name: 'JavaScript', level: 'Confirmé', percentage: 85 },
    { name: 'C# / .NET / MonoGame', level: 'Intermédiaire', percentage: 70 },
    { name: 'Python', level: 'Intermédiaire', percentage: 70 },
    { name: 'PHP / MySQL', level: 'Intermédiaire', percentage: 70 },
    { name: 'HTML / CSS / Bootstrap', level: 'Confirmé', percentage: 85 },
    { name: 'XML, XSD, XSLT', level: 'Intermédiaire', percentage: 70 },
    { name: 'Git / GitHub', level: 'Confirmé', percentage: 85 },
    { name: 'Slack, Jira', level: 'Bonne pratique', percentage: 60 },
    { name: 'Méthodologie Agile', level: 'Utilisée en projet', percentage: 75 }
  ];
}
