import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {MassType} from './Interfaces/MassType';
import {Ingredient} from './Interfaces/Ingredient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private apiService: ApiService) { }

  ingredients: Ingredient[] = [];

  ngOnInit(): void {
    this.apiService.getIngredients().subscribe(ingredients => {
      ingredients.forEach(ingredient => {
        this.ingredients.push(ingredient);
      });
    });
  }

}
