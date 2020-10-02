import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  headElements = ['Nome', 'Sobrenome', 'Telefone', 'Ações'];

  public clientes: Cliente[] = [];
  public windowReload;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(clientes => {
      this.clientes = clientes;
    },
    error => {
      console.log(error);
    }
    );
  }
  remove(cliente: Cliente) {
    this.clienteService.remove(cliente._id).subscribe(() => {
      window.location.reload();
    },
    error => {
      console.log(error);
    }
    );
    // this.windowReload = window.location.reload(true);
  }

}
