import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {IToken} from './token.model';

describe('Token', () => {
  it('should create an instance', () => {
    expect(<IToken>{}).toBeTruthy();
  });
});
