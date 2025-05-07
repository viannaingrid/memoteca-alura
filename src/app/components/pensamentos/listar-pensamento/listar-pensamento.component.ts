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
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, magna erat tempor libero, nec accumsan nisl odio sit amet eros. Fusce nec quam ut justo tincidunt efficitur. Curabitur vel purus a orci pulvinar sagittis. Morbi porta, turpis nec suscipit consequat, velit lorem feugiat magna, sit amet dignissim enim sapien nec nunc. Vivamus commodo ante ut porta interdum.',
      autoria: 'Dev Front',
      modelo: 'modelo3'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
