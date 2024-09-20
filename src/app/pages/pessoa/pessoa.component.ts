import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {Router} from "@angular/router";
import {Button} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [CardModule, FormsModule, Button, CalendarModule, InputTextModule],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent {
  nome: string = '';  // Nome do usuário
  cpf: string = '';   // CPF do usuário
  email: string='';
  telefone: string='';

  constructor(private router: Router) {}

  // Método para navegar para a tela "home"
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
