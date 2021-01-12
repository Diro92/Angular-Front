import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-actividad',
  templateUrl: './crud-actividad.component.html',
  styleUrls: ['./crud-actividad.component.scss']
})
export class CrudActividadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({

    Nombre:new FormControl(),
    Duracion:new FormControl(),
    Tipo:new FormControl(),
    

  });


  Guardar(){

      console.log(this.form.value);
    }

}
