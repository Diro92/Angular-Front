import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudActividadComponent } from '../crud-actividad/crud-actividad.component';
import { DataService } from '../Services/data.service';
import { UserActividadesService } from '../Services/user-actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  results:any;
  results2:any;
  Usuario: String;
 
  
   constructor(public Authentication:UserActividadesService, 
     public dialog: MatDialog,
     public Data:DataService) { }

  ngOnInit(): void {

    
    this.Authentication.Showdata().subscribe( Response =>{
 
         this.results = Response;
       
        
    });

    this.Authentication.ShowUsers().subscribe( Response =>{
 
      this.results2 = Response;
    
   
 });
  }
   
   Mostrar() {
     
    const dialogRef = this.dialog.open(CrudActividadComponent);
   }


}
