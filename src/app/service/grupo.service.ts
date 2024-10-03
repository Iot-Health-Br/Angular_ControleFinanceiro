import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {grupo} from "../models/grupo";

@Injectable({
  providedIn: 'root',
})
export class GrupoService {
  private apiUrl = 'http://localhost:8080/api/grupo';  // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para salvar uma grupo
  saveGrupo(grupo: grupo): Observable<grupo> {
    return this.http.post<grupo>(this.apiUrl, grupo);
  }
}
