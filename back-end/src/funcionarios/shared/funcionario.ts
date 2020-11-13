import { Document } from 'mongoose';

export class Funcionario extends Document {
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
    cpf: string;
    rg: string;
    cargo: string;
    dataNascimento: Date;
    image: string;
}
