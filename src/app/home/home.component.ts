import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:string;
  results: any;
  Breaking:any;
  valor:string="primary";
  constructor(private Authentication:DataService) { }

  ngOnInit(): void {

    const user:User = JSON.parse(localStorage.getItem('user'));
    this.user = user.username;
    
    this.Authentication.GetInformation().subscribe(x =>{

        this.Breaking = x;
      

    })
    this.Authentication.Showdata().subscribe( Response =>{
 
      this.results = Response;
    
 },error=>{

    console.log(error);

 });


 
}




  
}
