import { Controller, Get } from '@nestjs/common';
import { Delete, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { Funcionario } from './shared/funcionario';
import { FuncionarioService } from './shared/funcionario.service';

@Controller('funcionarios')
export class FuncionariosController {

    constructor(private funcService: FuncionarioService) {
        
    }

    @Get()
    async getAll(): Promise<Funcionario[]> {
        return this.funcService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Funcionario> {
        return this.funcService.getById(id);
    }

    @Post()
    async create(@Body() funcionario: Funcionario): Promise<Funcionario> {
        return this.funcService.create(funcionario);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() funcionario: Funcionario): Promise<Funcionario> {
        return this.funcService.update(id, funcionario);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        this.funcService.remove(id);
    }
}
