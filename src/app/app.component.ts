import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getIngredients().subscribe(data => {
      console.log(data);
    });
  }

}
