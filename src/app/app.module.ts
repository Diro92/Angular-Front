import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActividadesComponent } from './actividades/actividades.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CrudActividadComponent } from './crud-actividad/crud-actividad.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { errorMonitor } from 'events';
import { JwtInterceptor,JWT_OPTIONS   } from '@auth0/angular-jwt';

import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './Interceptors/loading.interceptor';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ActividadesComponent,
    NavigationComponent,
    CrudActividadComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    
    ToastrModule.forRoot({

      positionClass:'toast-bottom-center'
    }),
 
    NgxSpinnerModule
   
  ],
  
  exports: [ MatDialogModule],

  providers: [

    
     {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true}
  


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
