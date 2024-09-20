import { Component } from '@angular/core';
import {Button, ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";

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

}
