import { Component } from '@angular/core';
import { RestComponent } from './rest.component';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {


users:users[] =[];
constructor(public rs:RestService ){}
ngOnInit():void{
  this.rs.getusers().subscribe((response)=>{
    this.users=response;
  })


}
}
