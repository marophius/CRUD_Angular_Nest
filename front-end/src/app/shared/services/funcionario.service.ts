import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  public funcionarios: Funcionario[] = [];

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Funcionario[]>(`${environment.host}/funcionarios`);
  }

  getById(id: string) {
    return this.httpClient.get<Funcionario>(`${environment.host}/funcionarios/${id}`);
  }

  save(funcionario: Funcionario) {
    const funcionarioBody = {
        nome: funcionario.nome,
        sobrenome: funcionario.sobrenome,
        email: funcionario.email,
        telefone: funcionario.telefone,
        cpf: funcionario.cpf,
        rg: funcionario.rg,
        cargo: funcionario.cargo,
        dataNascimento: funcionario.dataNascimento
    };
    if (funcionario._id) {
      return this.httpClient.put<Funcionario>(`${environment.host}/funcionarios/${funcionario._id}`, funcionarioBody);
    } else {
      return this.httpClient.post<Funcionario>(`${environment.host}/funcionarios`, funcionarioBody);
    }
  }

  remove(id: string) {
    return this.httpClient.delete(`${environment.host}/funcionarios/${id}`);
  }

}
