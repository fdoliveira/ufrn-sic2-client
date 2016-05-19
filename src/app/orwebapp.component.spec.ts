import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { OrwebappAppComponent } from '../app/orwebapp.component';

beforeEachProviders(() => [OrwebappAppComponent]);

describe('App: Orwebapp', () => {
  it('should create the app',
      inject([OrwebappAppComponent], (app: OrwebappAppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'orwebapp works!\'',
  //     inject([OrwebappAppComponent], (app: OrwebappAppComponent) => {
  //   expect(app.title).toEqual('orwebapp works!');
  // }));
});
