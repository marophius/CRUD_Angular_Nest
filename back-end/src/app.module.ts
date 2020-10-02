import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import {ClienteModule} from './clientes/clientes.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Desafio:Desafio8@cluster0.0sqwb.mongodb.net/Desafio?retryWrites=true&w=majority',  { useNewUrlParser: true, useFindAndModify: false }),
        FuncionariosModule,
    ClienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
