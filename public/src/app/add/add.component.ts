import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  sloths = []
  newSloth = {name: "", age: 0}
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  create(): void { 
    console.log(this.newSloth)
    let observable = this._httpService.create(this.newSloth)
    observable.subscribe(data => {
    this.sloths = data['data'];
    })
    this.newSloth = {name: "", age: 0}
    this._router.navigate(['/all'])
  }

}
