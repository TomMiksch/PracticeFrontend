import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backendUrl = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  getIngredients(): Observable<any> {
    return this.httpClient.get(this.backendUrl);
  }
}
