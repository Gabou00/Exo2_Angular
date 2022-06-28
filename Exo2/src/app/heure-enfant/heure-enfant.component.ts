import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heure-enfant',
  templateUrl: './heure-enfant.component.html',
  styleUrls: ['./heure-enfant.component.scss']
})
export class HeureEnfantComponent implements OnInit {

  @Input()
  heure! : Date;

  constructor() { }

  ngOnInit(): void {
  }

}
