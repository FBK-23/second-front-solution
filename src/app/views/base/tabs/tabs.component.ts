import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  public slides = [
    { name: "./assets/img/avatars/rapport1.png", 
    id: 'tab-01' ,
  },
    { name: "./assets/img/avatars/rapport2.png", id: 'tab-02' },
    { name: "./assets/img/avatars/rapport3.png", id: 'tab-03' }
  ];
  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  constructor() { }

}
