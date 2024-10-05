import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {Router} from "@angular/router";
import {Button, ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import {PessoasService} from "../../service/pessoa.service";
import {pessoa} from "../../models/pessoa";
import {MessageService} from "primeng/api";
import { MessagesModule } from 'primeng/messages';
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";


@Component({
  selector: 'app-pessoa',
  standalone: true,
  providers: [MessageService], //Ao acrescentar o providers ele fica vermelho no component
  imports: [
    CardModule,
    FormsModule,
    Button,
    CalendarModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    RippleModule,
    ButtonModule
  ],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css',
})
export class PessoaComponent {
  nome: string = '';  // Nome do usuário
  cpf: string = '';   // CPF do usuário
  email: string='';
  telefone: string='';

  constructor(private router: Router, private pessoaService: PessoasService, private messageService: MessageService) {}

  savePessoa() {
    const newPessoa: pessoa = {
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      telefone: this.telefone,
    };

    this.pessoaService.savePessoa(newPessoa).subscribe(
      (response) => {
        this.messageService.add({severity:'success', summary:'Sucesso', detail: response, life: 10000});
        console.log('Pessoa salva com sucesso!', response);
        // Limpar os campos após o sucesso
        this.clearForm();
      },
      (error) => {
        const errorMessage = error.error;
        this.messageService.add({severity:'error', summary:'Erro', detail: errorMessage, life: 10000 });
        console.error('Erro ao salvar a pessoa', error);
      }
    );
  }
  // Método para limpar os campos do formulário
  clearForm() {
    this.nome = '';
    this.cpf = '';
    this.email = '';
    this.telefone = '';
  }
  // Método para navegar para a tela "home"
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
