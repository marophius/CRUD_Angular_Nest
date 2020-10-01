import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controllers';
import { ClienteService } from './shared/cliente.service';
import { ClienteSchema } from '../schemas/cliente.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Cliente', schema: ClienteSchema}])
    ],
    controllers: [ClientesController],
    providers: [ClienteService]
})
export class ClienteModule {}
