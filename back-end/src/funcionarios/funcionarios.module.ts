import { Module } from '@nestjs/common';
import { FuncionariosController } from './funcionarios.controller';
import { FuncionarioService } from './shared/funcionario.service';
import { FuncionarioSchema } from '../schemas/funcionario.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Funcionario', schema: FuncionarioSchema}])
    ],
    controllers: [FuncionariosController],
    providers: [FuncionarioService]
})
export class FuncionariosModule {}
