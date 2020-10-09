import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
  let provider: ClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteService],
    }).compile();

    provider = module.get<ClienteService>(ClienteService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
