import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import {ClienteModule} from './clientes/clientes.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://Desafio:<Desafio8*>@cluster0-shard-00-00.0sqwb.mongodb.net:27017,cluster0-shard-00-01.0sqwb.mongodb.net:27017,cluster0-shard-00-02.0sqwb.mongodb.net:27017/<Desafio>?ssl=true&replicaSet=atlas-y3ufz0-shard-0&authSource=admin&retryWrites=true&w=majority'),
        FuncionariosModule,
    ClienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
