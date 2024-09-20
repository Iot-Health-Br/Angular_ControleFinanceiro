import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ButtonGroupModule} from "primeng/buttongroup";
import {Router} from "@angular/router";
import {CalendarModule} from "primeng/calendar";

@Component({
  selector: 'app-meta',
  standalone: true,
  imports: [CardModule, FormsModule, InputTextModule, ButtonModule, ButtonGroupModule, CalendarModule],
  templateUrl: './meta.component.html',
  styleUrl: './meta.component.css'
})
export class MetaComponent {
  tipo: string='';
  valor: string='';

  constructor(private router: Router) {}

  // Método para navegar para a tela "home"
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
