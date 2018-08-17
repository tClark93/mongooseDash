import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        console.log(params['id'])
    });
  }

  // getWeather(city): void { 
  //   console.log(city)
  //   console.log('clicked')
  //   let observable = this._httpService.getWeather(city)
  //   observable.subscribe(data => {
  //     console.log(data)
  //   this.currentWeather = data;
  //   })
  // } 
 
}
