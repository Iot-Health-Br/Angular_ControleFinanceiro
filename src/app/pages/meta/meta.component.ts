import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ButtonGroupModule} from "primeng/buttongroup";

@Component({
  selector: 'app-meta',
  standalone: true,
  imports: [CardModule, FormsModule, InputTextModule, ButtonModule, ButtonGroupModule],
  templateUrl: './meta.component.html',
  styleUrl: './meta.component.css'
})
export class MetaComponent {
  tipo: string='';
  valor: string='';
}
