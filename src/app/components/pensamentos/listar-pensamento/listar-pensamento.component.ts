import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Ingrid',
      modelo: 'modelo1'
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Dev Front',
      modelo: 'modelo2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
