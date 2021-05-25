import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Tareas } from '../_models/tareas';
import { User } from '../_models/user';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'})

export class UserActividadesService implements OnInit {

  Task:Tareas[] = [];

  user:any;
  baseurl='http://localhost:5001/api/';
  InforApi = 'https://www.breakingbadapi.com/api/'
  
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  Showdata(){    

    const user = JSON.parse(localStorage.getItem('user'))?.username

    console.log(this.Task.length);

    if(this.Task.length > 0) return of(this.Task)
    return this.http.get<Tareas[]>(this.baseurl +'User/'+ user).pipe(
      
      map( tareas => {

        this.Task = tareas;

        //console.log(this.Task);
        //console.log(this.Task.length);


         
        return tareas;

      })) 
  }



  ShowUsers(){    

    const user = JSON.parse(localStorage.getItem('user'))?.username

    
    return this.http.get(this.baseurl +'User/'); 

  }

  ShowInfo(){

    return this.http.get(this.InforApi+'characters')
  }

}