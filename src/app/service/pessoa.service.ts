import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {pessoa} from "../models/pessoa";

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  private apiUrl = 'http://localhost:8080/api/pessoas';  // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para salvar uma pessoa
  savePessoas(pessoa: pessoa): Observable<pessoa> {
    return this.http.post<pessoa>(this.apiUrl, pessoa);
  }
}
