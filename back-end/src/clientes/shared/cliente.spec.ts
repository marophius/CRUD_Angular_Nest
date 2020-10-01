import { Cliente } from './cliente';

describe('cliente', () => {
  it('should be defined', () => {
    expect(new Cliente()).toBeDefined();
  });
});
