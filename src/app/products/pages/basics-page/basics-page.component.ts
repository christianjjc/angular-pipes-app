import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'christian';
  public nameUpper: string = 'CHRISTIAN';
  public fullName: string = 'ChRiStIaN JImeNeZ';

  public customDate: Date = new Date();
}
