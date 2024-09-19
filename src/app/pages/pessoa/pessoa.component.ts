import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [CardModule, FormsModule],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent {
  nome: string = '';  // Nome do usuário
  cpf: string = '';   // CPF do usuário
  email: string='';
  telefone: string='';
}
