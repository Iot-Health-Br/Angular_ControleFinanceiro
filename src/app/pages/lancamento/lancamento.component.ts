import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import {InputTextModule} from "primeng/inputtext";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lancamento',
  standalone: true,
  imports: [CardModule, FormsModule, CalendarModule, InputTextModule],
  templateUrl: './lancamento.component.html',
  styleUrl: './lancamento.component.css'
})
export class LancamentoComponent {
  nome: string = '';
  descricao: string= '';
  data: Date | undefined ;
  tipo: string = '';
  valor: string = '';
  categoria:string = '';

  constructor(private router: Router) {}

  // Método para navegar para a tela "home"
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
