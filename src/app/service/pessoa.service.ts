import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {pessoa} from "../../app/models/pessoa";

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  private apiUrl = 'http://localhost:8080/api/pessoas';  // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para salvar uma pessoa
  savePessoa(pessoa: pessoa): Observable<string> {
    //return this.http.post<string>(this.apiUrl, pessoa);
    return this.http.post(this.apiUrl, pessoa, { responseType: 'text' });
  }
}
