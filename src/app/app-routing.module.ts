import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  

  {path:'Home', component:HomeComponent, canActivate:[AuthGuard]},


  {path:'Actividades', component:ActividadesComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
