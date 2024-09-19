import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-grupo',
  standalone: true,
  imports: [CardModule, FormsModule],
  templateUrl: './grupo.component.html',
  styleUrl: './grupo.component.css'
})
export class GrupoComponent {
  nome: string = '';
  descricao: string = '';
}
