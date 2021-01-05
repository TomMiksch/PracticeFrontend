import {AppComponent} from './app.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {ApiService} from './services/api.service';
import {MockService} from 'ng-mocks';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let apiServiceSpy;
  const createComponent = createComponentFactory({
    component: AppComponent,
    mocks: [
      ApiService
    ]
  });

  beforeEach(async () => {
    apiServiceSpy = spyOn(MockService(ApiService), 'getIngredients');
    const apiService = spectator.inject(ApiService);
    apiService.getIngredients.andReturn('');
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator).toBeTruthy();
  });

  it('should display Hello World', () => {
    expect(spectator.element.textContent).toEqual('Hello, World!');
  });

  it('should call the backend', () => {
    expect(apiServiceSpy).toHaveBeenCalled();
  });
});
