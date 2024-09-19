import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-lancamento',
  standalone: true,
  imports: [CardModule, FormsModule, CalendarModule],
  templateUrl: './lancamento.component.html',
  styleUrl: './lancamento.component.css'
})
export class LancamentoComponent {
  nome: string = '';
  descricao: string= '';
  data: Date ;
  tipo: string = '';
  valor: string = '';
  categoria:string = '';
}
