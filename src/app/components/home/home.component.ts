import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent, CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 
  listaItens = [
    {
      produto: 'Bananas',
      valor: '5,00'
    },
    {
      produto: 'Morangos',
      valor: '10,00'
    },
    {
      produto: 'Melancia',
      valor: '20,00'
    },
    {
      produto: 'Uvas',
      valor: '7,00'
    },
  ]
}
