import { Component, OnInit } from '@angular/core';
import { PrimeIcons as Pi, MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
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
          },
          {
            label: 'Números',
            icon: Pi.DOLLAR,
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
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
