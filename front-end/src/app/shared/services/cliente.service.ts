import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public clientes: Cliente[] = [];

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Cliente[]>(`${environment.host}/clientes`);
  }
  getById(id: string) {
    return this.httpClient.get<Cliente>(`${environment.host}/clientes/${id}`);
  }
  save(clientes: Cliente) {
    const clienteBody = {
        nome: clientes.nome,
        sobrenome: clientes.sobrenome,
        email: clientes.email,
        telefone: clientes.telefone,
        cpf: clientes.cpf,
        rg: clientes.rg,
        cargo: clientes.cargo,
        dataNascimento: clientes.dataNascimento
    };
    if (clientes._id) {
      return this.httpClient.put<Cliente>(`${environment.host}/clientes/${clientes._id}`, clienteBody);
    } else {
      return this.httpClient.post<Cliente>(`${environment.host}/clientes`, clienteBody);
    }
  }

  remove(id: string) {
    return this.httpClient.delete(`${environment.host}/clientes/${id}`);
  }

}
