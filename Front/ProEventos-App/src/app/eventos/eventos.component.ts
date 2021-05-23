import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  widthImg: number = 75;
  marginImg: number = 2;
  showImg: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  changeImg(){
    this.showImg = !this.showImg;
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/Eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error),
    );
  }

}
