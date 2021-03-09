import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../_models/user';
import { Usuario } from '../Interfaces/Usuario';



@Injectable({
  providedIn: 'root'
})


export class DataService {

  private currentusersource = new ReplaySubject<User>(1);
  currentuser$ = this.currentusersource.asObservable();

  Usuario:any
  decodedToken: any;
  baseurl='http://localhost:5001/api/';
  
  user:any;
  constructor(private http: HttpClient) {}
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



}