import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { meta } from '../../app/models/meta';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private apiUrl = 'http://localhost:8080/api/meta';  // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para salvar uma meta
  saveMeta(meta: meta): Observable<meta> {
    return this.http.post<meta>(this.apiUrl, meta);
  }
}
