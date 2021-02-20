import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../_models/user';







@Injectable({
  providedIn: 'root'})

export class UserActividadesService implements OnInit {



  user:any;
  baseurl='http://localhost:5001/api/';
  InforApi = 'https://www.breakingbadapi.com/api/'
  
  constructor(private http: HttpClient) { 


   
  }
  ngOnInit(): void {


    
  }

  Showdata(){    

    const user = JSON.parse(localStorage.getItem('user'))?.username

    
    return this.http.get(this.baseurl +'User/'+ user); 

  }
  ShowUsers(){    

    const user = JSON.parse(localStorage.getItem('user'))?.username

    
    return this.http.get(this.baseurl +'User/'); 

  }

  ShowInfo(){

    return this.http.get(this.InforApi+'characters')
  }

}