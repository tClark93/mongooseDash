import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/sloths')
  }

  getOne(id){
    return this._http.get(`/sloths/${id}`)
  }

  create(sloth){
    return this._http.post('/sloths', sloth)
  }

  editSloth(sloth){
    console.log("inside service.ts")
    return this._http.put(`/sloths/${sloth.id}`, sloth)
  }

  delete(id){
    return this._http.delete('/sloths/'+id)
  }

}

