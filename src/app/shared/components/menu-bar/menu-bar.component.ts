import { Component } from '@angular/core';
import { PrimeIcons as Pi, MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu-bar',
  standalone: false,
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent {
  public menuItems: MenuItem[] = [];
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: Pi.DESKTOP,
        items: [
          {
            label: 'Textos y Fechas',
            icon: Pi.ALIGN_LEFT,
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: Pi.DOLLAR,
            routerLink: 'numbers',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          },
        ],
      },

      {
        label: 'Pipes Personalizados',
        icon: Pi.COG,
        items: [
          {
            label: 'Otro Elemento',
            icon: Pi.FACE_SMILE,
          },
        ],
      },
    ];
  }
}
