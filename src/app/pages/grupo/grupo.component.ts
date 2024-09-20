import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {Button, ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {ButtonGroupModule} from "primeng/buttongroup";
import {Router} from "@angular/router";

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

  constructor(private router: Router) {}

  // Método para navegar para a tela "home"
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
