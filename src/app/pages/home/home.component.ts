import { Component } from '@angular/core';
import {Button, ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Button,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  // Método para navegar para a tela "grupo"
  navigateToGrupo() {
    this.router.navigate(['/grupo']);
  }
  // Método para navegar para a tela "Lançamento"
  navigateToLancamento() {
    this.router.navigate(['/lancamento']);
  }
  // Método para navegar para a tela "Meta"
  navigateToMeta() {
    this.router.navigate(['/meta']);
  }
  // Método para navegar para a tela "Pessoa"
  navigateToPessoa() {
    this.router.navigate(['/pessoa']);
  }

}
