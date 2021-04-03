import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../Services/data.service';
import { User } from '../_models/user';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor( private Authentication:DataService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let CurrentUser:User;

    this.Authentication.currentuser$.pipe(take(1)).subscribe(user =>CurrentUser = user);

    if(CurrentUser){

    

      
      request=request.clone({
        setHeaders:{
            Authorization:`Bearer ${CurrentUser.token}`  
        }
      })

     
 
    }
    
    
    return next.handle(request);
  }
}

