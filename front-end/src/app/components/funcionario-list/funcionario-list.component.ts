import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/shared/models/funcionario';
import { FuncionarioService } from 'src/app/shared/services/funcionario.service';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit {

  headElements = ['Nome', 'Sobrenome', 'Telefone', 'Cargo', 'Ações'];

  public funcionarios: Funcionario[] = [];
  public windowReload;

  constructor(private funcService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcService.getAll().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
    },
    error => {
      console.log(error);
    }
    );
  }

  remove(funcionario: Funcionario) {
    this.funcService.remove(funcionario._id).subscribe(() => {
      window.location.reload();
    },
    error => {
      console.log(error);
    }
    );
    // this.windowReload = window.location.reload(true);
  }

}
