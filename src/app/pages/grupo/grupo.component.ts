import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {Button, ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {ButtonGroupModule} from "primeng/buttongroup";
import {Router} from "@angular/router";
import {GrupoService} from "../../service/grupo.service";
import {grupo} from "../../models/grupo";

@Component({
  selector: 'app-grupo',
  standalone: true,
  imports: [CardModule, FormsModule, ButtonModule, ButtonGroupModule, InputTextModule],
  templateUrl: './grupo.component.html',
  styleUrl: './grupo.component.css'
})
export class GrupoComponent {
  nome: string = '';
  descricao: string = '';
  saldo: string='';

  constructor(private router: Router, private grupoService: GrupoService) {}

  saveGroup() {
    const newGroup: grupo = {
      nome: this.nome,
      descricao: this.descricao,
      saldo: this.saldo,
    };

    this.grupoService.saveGroup(newGroup).subscribe(
      (response) => {
        console.log('Grupo salvo com sucesso!', response);
        // Aqui você pode adicionar lógica para exibir uma mensagem de sucesso
      },
      (error) => {
        console.error('Erro ao salvar o grupo', error);
        // Aqui você pode adicionar lógica para exibir uma mensagem de erro
      }
    );
  }





  // Método para navegar para a tela "home"
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
