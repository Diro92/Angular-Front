import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudActividadComponent } from '../crud-actividad/crud-actividad.component';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {
  results:any;

   constructor(private Authentication:DataService,  public dialog: MatDialog) { }

  ngOnInit(): void {

    this.Authentication.Showdata().subscribe( Response =>{
 
         this.results = Response;
    });
  }
   
   Mostrar() {
     
    const dialogRef = this.dialog.open(CrudActividadComponent);
   }


}
