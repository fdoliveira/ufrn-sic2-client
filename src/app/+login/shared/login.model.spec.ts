import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {ILogin} from './login.model';

describe('Login', () => {
  it('should create an instance', () => {
    expect(<ILogin>{}).toBeTruthy();
  });
});
