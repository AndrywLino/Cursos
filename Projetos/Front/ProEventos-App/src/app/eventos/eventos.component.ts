import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [
    {
      Tema: 'Angular',
      Local: 'Mossoro-RN'
    },
    {
      Tema: 'C#',
      Local: 'Parnamoscow-RN'
    },
    {
      Tema: 'HTML',
      Local: 'Rio do Fogo-RN'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
