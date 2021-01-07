import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ingredient} from '../Interfaces/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backendUrl = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  getIngredients(): Observable<any> {
    return this.httpClient.get<Ingredient[]>(this.backendUrl);
  }
}
