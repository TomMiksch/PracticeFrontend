import {AppComponent} from './app.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {ApiService} from './services/api.service';
import {of} from 'rxjs';
import {Ingredient} from './Interfaces/Ingredient';
import {MassType} from './Interfaces/MassType';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let ingredient: Ingredient[];
  let apiService;
  const createComponent = createComponentFactory({
    component: AppComponent,
    mocks: [
      ApiService
    ],
    detectChanges: false
  });

  beforeEach(async () => {
    spectator = createComponent();
    apiService = spectator.inject<ApiService>(ApiService);
    ingredient = [{
      name: 'flour',
      amount: 4,
      massType: MassType.WEIGHT,
      massUnit: 'oz'
    }];
    apiService.getIngredients.andReturn(of(ingredient));
  });

  it('should create the app', () => {
    expect(spectator).toBeTruthy();
  });

  it('should call the backend', () => {
    spectator.detectChanges();
    expect(spectator.component.ingredients).toEqual(ingredient);
  });

  it('should display the ingredients in a table', () => {
    spectator.detectChanges();
    expect(spectator.query('.ingredients-name__row').textContent).toEqual('flour');
    expect(spectator.query('.ingredients-amount__row').textContent).toEqual('4');
    expect(spectator.query('.ingredients-massUnit__row').textContent).toEqual('oz');
    expect(spectator.query('.ingredients-massType__row').textContent).toEqual('WEIGHT');
  });
});
