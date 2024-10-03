import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MetaService } from '../../service/meta.service';
import { meta } from '../../models/meta';
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ButtonGroupModule} from "primeng/buttongroup";
import {CalendarModule} from "primeng/calendar";
import {TreeSelectModule} from "primeng/treeselect";

@Component({
  selector: 'app-meta',
  standalone: true,
  templateUrl: './meta.component.html',
  styleUrl: './meta.component.css',
  imports: [
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ButtonGroupModule,
    CalendarModule,
    TreeSelectModule
  ],
})
export class MetaComponent {
  meta: string = '';
  descricao: string = '';
  tipo: any[] = [
    { key: 'SAIDA', label: 'Saída' },
    { key: 'ENTRADA', label: 'Entrada' }
  ];
  categoria: any[] = [
    { key: 'ALIMENTACAO', label: 'ALIMENTAÇÃO' },
    { key: 'TRANSPORTE', label: 'TRANSPORTE' },
    { key: 'LAZER', label: 'LAZER' },
    { key: 'SAUDE', label: 'SAÚDE' },
    { key: 'EDUCACAO', label: 'EDUCAÇÃO' },
    { key: 'OUTROS', label: 'OUTROS' }
  ];
  valor: string = '';

  selectedCategoria: any = null;
  selectedTipo: any = null;
  constructor(private router: Router, private metaService: MetaService) {}

  // Método para salvar as informações ao clicar no botão Save
  saveMeta() {
    const newMeta: meta = {
      meta: this.meta,
      descricao: this.descricao,
      tipo: this.selectedTipo ? this.selectedTipo.key : '',
      categoria: this.selectedCategoria ? this.selectedCategoria.key : '',
      valor: this.valor,
    };

    this.metaService.saveMeta(newMeta).subscribe(
      (response) => {
        console.log('Meta salva com sucesso!', response);
        // Aqui você pode adicionar lógica para exibir uma mensagem de sucesso
      },
      (error) => {
        console.error('Erro ao salvar a meta', error);
        // Aqui você pode adicionar lógica para exibir uma mensagem de erro
      }
    );
  }

  // Método para navegar para a tela "home"
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
