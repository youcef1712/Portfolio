import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Application de planification de tournées',
      description: 'Application web pour visualiser sur carte et planifier automatiquement des tournées optimisées (distance, durée, coût), avec sélection des commandes, camions et équipes. Projet réalisé avec méthode agile (sprints, retours client).',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Agile'],
      link: ''
    },
    {
      title: 'Développement d’un jeu vidéo',
      description: 'Développement d’un jeu avec C# et le framework MonoGame. Intégration d’une gestion de données avec XML, XSD, XSLT, et collaboration avec Slack, Jira et Git.',
      technologies: ['C#', '.NET', 'MonoGame', 'XML', 'Git', 'Jira'],
      link: 'https://github.com/youcef1712/pacman'
    },
    {
      title: 'Robot en C – Détection d’obstacles',
      description: 'Création d’un robot se déplaçant sur une carte et détectant les obstacles. Réalisation de tests fonctionnels et de robustesse.',
      technologies: ['C', 'Algorithmique', 'Tests'],
      link: 'https://github.com/youcef1712/Projet_robot_curiosity'
    },
    {
      title: 'Site Web Burger Code',
      description: 'Site web réalisé en auto-formation avec PHP, MySQL, CSS, Bootstrap et jQuery. Intégration complète côté front-end et gestion de base de données.',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      link: 'https://github.com/youcef1712/Site_burger'
    },

    {
      title: 'dame_chinoise',
      description: 'Programme OCaml simule un jeu de stratégie avec un plateau hexagonal..',
      technologies: ['Ocaml'],
      link: 'https://github.com/youcef1712/dame_chinoise'
    },
    {
      title: 'Portfolio Angular',
      description: 'Ce portfolio personnel développé avec Angular met en avant mon parcours, mes projets et mes compétences.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      link: 'https://github.com/youcefbendra/portfolio-angular'
    },
    {
      title: 'Formulaire-php',
      description: 'Un formulaire de contact moderne permettant aux utilisateurs d envoyer un message avec validation dynamique.',
      technologies: ['php', 'javascript', 'css'],
      link: 'https://github.com/youcef1712/Formulaire-php'
    }
  ];
}

