import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Este serviço será provido globalmente
})
export class ViaCepService {
  constructor(private http: HttpClient) {}

  // Método para buscar o endereço através do CEP
  buscarEndereco(cep: string): Observable<any> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<any>(url);
  }
}
