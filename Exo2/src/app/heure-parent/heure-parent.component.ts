import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heure-parent',
  templateUrl: './heure-parent.component.html',
  styleUrls: ['./heure-parent.component.scss']
})
export class HeureParentComponent implements OnInit {

  heure: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  public date(timezone: string): string {
    const date = new Date().toLocaleString('fr-FR', { timeZone: "Europe/Paris" });
    const time = date.split(' ')[1];
  return time;
}
}
