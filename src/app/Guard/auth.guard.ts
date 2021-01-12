import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../Services/data.service';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private data:DataService){}

  canActivate() : Observable<boolean> {

      return this.data.currentuser$.pipe(

        map(user=>{

          if(user) return true;
          console.log("No allowed to enter");
        })
      )
    }
   
   
  }
  

