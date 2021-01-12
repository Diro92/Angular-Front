import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActividadesComponent } from './actividades/actividades.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CrudActividadComponent } from './crud-actividad/crud-actividad.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    ActividadesComponent,
    NavigationComponent,
    CrudActividadComponent,
    HomeComponent,
    PresentationComponent
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

      positionClass:'toast-bottom-right'
    })
   
  ],
  
  exports: [ MatDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
