import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../_models/user';



// const httpOptions = {
//    headers: new HttpHeaders({
//           Authorizacion:'Bearer '+ JSON.parse(localStorage.getItem('user'))?.token
//    })}

const headers=new HttpHeaders().
            set('Authorization','Bearer '+ JSON.parse(localStorage.getItem('user'))?.token)





@Injectable({
  providedIn: 'root'})

export class UserActividadesService implements OnInit {



  user:any;
  baseurl='http://localhost:5001/api/';
  
  
  constructor(private http: HttpClient) { 


   
  }
  ngOnInit(): void {


    
  }

  Showdata(){    

    const user = JSON.parse(localStorage.getItem('user'))?.username

    
    return this.http.get(this.baseurl +'User/'+ user,{'headers': headers}); 

  }

}