import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { UserActividadesService } from '../Services/user-actividades.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results: any;

 


  constructor(public Data:DataService,private Authentication:UserActividadesService) { }

  ngOnInit(): void {


    this.Authentication.ShowInfo().subscribe( Response =>{
 
      this.results = Response;
     
   
 });
    

  }




}
