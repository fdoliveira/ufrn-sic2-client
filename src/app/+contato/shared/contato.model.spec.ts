import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {IContato} from './contato.model';

describe('Contato', () => {
  it('should create an instance', () => {
    expect(<IContato>{}).toBeTruthy();
  });
});
