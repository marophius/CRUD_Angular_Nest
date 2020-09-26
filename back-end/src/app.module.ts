import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/DesafioI'),
    FuncionariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
