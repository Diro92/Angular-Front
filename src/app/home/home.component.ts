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

 


  constructor(private Data:UserActividadesService,private Authentication:DataService) { }

  ngOnInit(): void {}

}
