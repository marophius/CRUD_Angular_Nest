import { Document } from 'mongoose';

export class Cliente extends Document {
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: Date;
    cpf: string;
    rg: string;
    telefone: string;
    image: string;
    
}
