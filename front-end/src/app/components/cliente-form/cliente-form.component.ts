import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-cliete-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  public cliente: Cliente = {};

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.getById(id).subscribe(cliente => {
        this.cliente = cliente;
       });
     }
   }
  onSubmit() {
    this.clienteService.save(this.cliente).subscribe(cliente => {
      console.log(cliente);
      this.router.navigate(['cliente']);
    });
  }

}
