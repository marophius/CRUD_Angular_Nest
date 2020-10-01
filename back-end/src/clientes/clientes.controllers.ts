import { Controller, Get } from '@nestjs/common';
import { Delete, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { Cliente } from './shared/cliente';
import { ClienteService } from './shared/cliente.service';

@Controller('cliente')
export class ClientesController {

    constructor(private clienteService: ClienteService) {
      
    }
    @Get()
    async getAll(): Promise<Cliente[]> {
        return this.clienteService.getAll();
    }
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Cliente> {
        return this.clienteService.getById(id);
    }
    @Post()
    async create(@Body() cliente: Cliente): Promise<Cliente> {
        return this.clienteService.create(cliente);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() Cliente: Cliente): Promise<Cliente> {
        return this.clienteService.update(id, Cliente);
    }
    @Delete(':id')
    async remove(@Param('id') id: string) {
        this.clienteService.remove(id);
    }
}
