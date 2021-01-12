import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../_models/user';
import { Usuario } from '../Interfaces/Usuario';


const httpOptions = {


  headers: new HttpHeaders({

   Authorizacion:'Bearer '+ JSON.parse(localStorage.getItem('user')).token

  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentusersource = new ReplaySubject<User>(1);
  currentuser$ = this.currentusersource.asObservable();
  baseurl='http://localhost:5001/api/';
  
  user:string;
  constructor(private http: HttpClient) {

   
  }

  Showdata(){

      const user:User = JSON.parse(localStorage.getItem('user'));
      this.user = user.username;
     
     console.log(httpOptions);
     //return this.http.get<Usuario[]>(this.baseurl +'User/'+ this.user,);

     return this.http.get(this.baseurl +'User', httpOptions);
      

  }
 login(model:any){


    return this.http.post(this.baseurl +'authentication/login', model).
      pipe( map(( response: User )=>{
          const user = response;
          if(user){

              localStorage.setItem('user',JSON.stringify(user));
              this.currentusersource.next(user)
              return user;
            }
      }) );
  }

  setcurrentUser(user:User){

    this.currentusersource.next(user);
  }

  logout(){
       localStorage.removeItem('user');
       this.currentusersource.next(null);
  }

  Getuser(){

    return this.http.get(this.baseurl + 'auth/');
  }





  //// Any other Data

  GetInformation(){

    return this.http.get('https://www.breakingbadapi.com/api/characters');
  }

}