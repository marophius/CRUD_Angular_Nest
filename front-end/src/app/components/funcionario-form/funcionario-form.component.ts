import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/shared/models/funcionario';
import { FuncionarioService } from 'src/app/shared/services/funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent implements OnInit {

  public funcionario: Funcionario = {};

  constructor(
    private funcService: FuncionarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.funcService.getById(id).subscribe(funcionario => {
        this.funcionario = funcionario;
      });
    }
  }

  onSubmit() {
    this.funcService.save(this.funcionario).subscribe(funcionario => {
      console.log(funcionario);
      this.router.navigate(['funcionarios']);
    });
  }

}
