import { Component } from '@angular/core';
@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [],
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.css'
})
export class SpecialtiesComponent {}(
  document.addEventListener('DOMContentLoaded', () => {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling as HTMLElement;
        btn.classList.toggle('active');
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  })


)
