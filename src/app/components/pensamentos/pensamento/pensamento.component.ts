import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {

  pensamento = {
    conteudo: "I love Angular",
    autoria: "Ingrid",
    modelo: "modelo3"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
