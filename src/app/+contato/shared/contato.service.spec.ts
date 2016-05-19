import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ContatoService } from './contato.service';

describe('Contato Service', () => {
  beforeEachProviders(() => [ContatoService]);

  it('should ...',
      inject([ContatoService], (service: ContatoService) => {
    expect(service).toBeTruthy();
  }));
});
