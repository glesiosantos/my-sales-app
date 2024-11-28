import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

type MenuType = {
  path: string
  label: string
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule],
  template: `
     @for (item of menuItems; track item.path) {
        <a mat-list-item [href]="item.path">{{item.label}}</a>
      }
  `,
  styles: ``
})
export class MenuComponent {
  menuItems: Array<MenuType> = [
    { path: '/', label: 'Home'},
    { path: '/categories', label: 'Categories'},
    { path: '/suppliers', label: 'Suppliers'}
  ]
}
