import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  sloths = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showAll();
  }

  showAll(): void { 
    let observable = this._httpService.getAll()
    observable.subscribe(data => {
    this.sloths = data['data'];
    })
  } 

  delete(id): void { 
    console.log(id)
    let observable = this._httpService.delete(id)
    observable.subscribe(data => {
    console.log(data['data']);
    })
    this.showAll();
  }
}
