import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

@ViewChild(IonSegment, null) segment: IonSegment;
categories = [ 'todos', 'identidades', 'licencias', 'tarjetas', 'otros'];

  constructor() { }

  ngOnInit() {
    this.segment.value = this.categories[0];
  }

}
