import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  dates = ['01/01/2022','11/01/2022','21/01/2022','01/02/2022','11/02/2022','21/02/2022','01/03/2022','11/03/2022',];

  constructor() { }

}
