import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {Router} from "@angular/router";
import {Button} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import {PessoasService} from "../../service/pessoa.service";
import {pessoa} from "../../models/pessoa";

@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    Button,
    CalendarModule,
    InputTextModule
  ],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent {
  nome: string = '';  // Nome do usuário
  cpf: string = '';   // CPF do usuário
  email: string='';
  telefone: string='';

  constructor(private router: Router, private pessoaService: PessoasService) {}

  savePessoa() {
    const newPessoa: pessoa = {
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      telefone: this.telefone,
    };

    this.pessoaService.savePessoa(newPessoa).subscribe(
      (response) => {
        console.log('Pessoa salva com sucesso!', response);
        // Aqui você pode adicionar lógica para exibir uma mensagem de sucesso
      },
      (error) => {
        console.error('Erro ao salvar a pessoa', error);
        // Aqui você pode adicionar lógica para exibir uma mensagem de erro
      }
    );
  }





  // Método para navegar para a tela "home"
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
