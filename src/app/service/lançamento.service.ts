import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {lancamento} from "../models/lancamento";

@Injectable({
  providedIn: 'root',
})
export class LancamentoService {
  private apiUrl = 'http://localhost:8080/api/lancamento';  // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para salvar um lançamento
  lancamentoGrupo(lancamento: lancamento): Observable<lancamento> {
    return this.http.post<lancamento>(this.apiUrl, lancamento);
  }
}
