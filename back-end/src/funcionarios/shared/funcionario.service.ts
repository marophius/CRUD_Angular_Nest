import { Injectable } from '@nestjs/common';
import { Funcionario } from './funcionario';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FuncionarioService {

    constructor(@InjectModel('Funcionario') private readonly funcionarioModel: Model<Funcionario>) {

    }

    async getAll() {
        return await this.funcionarioModel.find().exec();
    }

    async getById(id: string) {
        return await this.funcionarioModel.findById(id).exec();
    }

    async create(funcionario: Funcionario) {
        const createdFuncionario = new this.funcionarioModel(funcionario);
        return await createdFuncionario.save();
    }

    async remove(id: string) {
        return await this.funcionarioModel.deleteOne({_id: id}).exec();
    }

    async update(id: string, funcionario: Funcionario) {
        await this.funcionarioModel.updateOne({_id: id}, funcionario).exec();
        return this.getById(id);
    }

}
