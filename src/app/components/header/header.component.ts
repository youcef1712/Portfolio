import { Component, HostListener, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  activeSection = '';

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;

    const sections = ['apropos', 'projects','CV','contact-rapide', 'skills', 'contact'];
    sections.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - 70;
        const bottom = top + el.offsetHeight;

        // active la section si scrollY est dedans
        // ou si on est sur la dernière section et tout en bas
        if ((window.scrollY >= top && window.scrollY < bottom) ||
            (index === sections.length - 1 && window.scrollY + window.innerHeight >= document.body.scrollHeight)) {
          this.activeSection = id;
        }
      }
    });
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.sidenav?.close();
  }

}
