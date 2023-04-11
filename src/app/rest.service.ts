import { Injectable } from '@angular/core';
import{HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(http:HttpClient) { }
  url:string ="http://localhost:3000/users";
  getusers(){
    return this.http.get<users[]>(this.url);

  }
}
