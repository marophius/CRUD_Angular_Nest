import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClienteService {

    constructor(@InjectModel('Cliente') private readonly clienteModel: Model<Cliente>) {
    }
    async getAll() {
        return await this.clienteModel.find().exec();
    }
    async getById(id: string) {
        return await this.clienteModel.findById(id).exec();
    }
    async create(Cliente: Cliente) {
        const createdCliente = new this.clienteModel(Cliente);
        return await createdCliente.save();
    }
    async remove(id: string) {
        return await this.clienteModel.deleteOne({_id: id}).exec();
    }

    async update(id: string, cliente: Cliente) {
        await this.clienteModel.updateOne({_id: id}, cliente).exec();
        return this.getById(id);
    }

}
