import { Test, TestingModule } from '@nestjs/testing';
import { FuncionarioService } from './funcionario.service';

describe('FuncionarioService', () => {
  let provider: FuncionarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuncionarioService],
    }).compile();

    provider = module.get<FuncionarioService>(FuncionarioService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
