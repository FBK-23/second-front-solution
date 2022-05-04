import { Component } from '@angular/core';
import { navItems } from './_nav';

@Component({
  selector: 'app-carousels',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
}
