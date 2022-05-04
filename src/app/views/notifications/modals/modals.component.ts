import { Component } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent {

  

  public liveDemoVisible = false;
  dates = ['01/01/2022','11/01/2022','21/01/2022','01/02/2022','11/02/2022','21/02/2022','01/03/2022','11/03/2022'];

  constructor() { }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }
}
