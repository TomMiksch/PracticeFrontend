import {ApiService} from './api.service';
import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ApiService', () => {
  let service: SpectatorService<ApiService>;
  const createService = createServiceFactory({
    service: ApiService,
    providers: [HttpClient, HttpHandler]
  });

  beforeEach(() => {
    service = createService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
