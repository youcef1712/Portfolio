  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
  import emailjs from '@emailjs/browser';
import { title } from 'process';

  @Component({
    selector: 'app-contact',
    imports: [ ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
  })
  export class ContactComponent {
    contactForm: FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder) {
      this.contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        title: ['', [Validators.required, Validators.minLength(2)]],
        message: ['', [Validators.required, Validators.minLength(10)]]
      });
    }

    onSubmit() {
      if (this.contactForm.valid) {
        emailjs.send(
          '17122001',       // ton ID de service EmailJS
          'template_m9raa0h', // ton ID de template
          this.contactForm.value,
          'vPfRV9TlXNpYXIwxH'        // ta clé publique
        )
        .then(() => {
          this.submitted = true;
          this.contactForm.reset();
        }).catch(err => {
          console.error('Erreur en envoyant le message:', err);
        });
        emailjs.send(
          '17122001',       // ton ID de service EmailJS
          'template_ofcd0tq', // ton ID de template
          this.contactForm.value,
          'vPfRV9TlXNpYXIwxH'        // ta clé publique
        )
        .then(() => {
          this.submitted = true;
          this.contactForm.reset();
        }).catch(err => {
          console.error('Erreur en envoyant le message:', err);
        });
      }
    }

  }
