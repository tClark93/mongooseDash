import { HttpService } from '../http.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editSloth: {};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
      this._route.params.subscribe(params => {
        console.log(params);
        this._httpService.getOne(params.id).subscribe(sloth => {
          this.editSloth = {
            id: sloth['data'][0]['_id'],
            name: sloth['data'][0]['name'],
            age: sloth['data'][0]['age']
          }
        });
      });
    }
    
    edit(){
      console.log("this is the sloth at edit", this.editSloth)
      let observable = this._httpService.editSloth(this.editSloth);
      observable.subscribe(data => {
        this.editSloth = {
          name: this.editSloth['name'],
          age: this.editSloth['age'],
        }
        console.log("Updated successfully!", data);
      })
      // this._router.navigate(['/all'])
    }
}
