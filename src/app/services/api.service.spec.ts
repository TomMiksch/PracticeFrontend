import {ApiService} from './api.service';
import {createHttpFactory, HttpMethod, SpectatorHttp} from '@ngneat/spectator';

describe('ApiService', () => {
  let service: SpectatorHttp<ApiService>;
  const createHttp = createHttpFactory(ApiService);

  beforeEach(() => {
    service = createHttp();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getIngredients', () => {
    service.service.getIngredients().subscribe();
    service.expectOne('http://localhost:8080/api/', HttpMethod.GET);
  });
});
