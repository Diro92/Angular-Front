import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DataService } from '../Services/data.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  Usuario:string;
  model :any = {};
  user:User;


  constructor(public Authentication:DataService,private toastr: ToastrService,private route: Router) {

     this.user=JSON.parse(localStorage.getItem('user'))
   }

  ngOnInit(): void {

    if(localStorage.getItem('user')!=null){
      
      this.Usuario = this.user.username;

    }}

  form = new FormGroup ({

    username: new FormControl(),
    password: new FormControl()

  })
  
    login(){

        this.Authentication.login(this.form.value).subscribe( response => {
        this.toastr.success('Logged in');
        this.route.navigateByUrl(('/Home'));
        this.Usuario = this.user.username
        
      },error=>{   
        
        this.toastr.error(error.error)
       });
      }
    
      logout(){

      this.Authentication.logout();
      this.toastr.warning('Logged out');
      this.form.reset();
      this.route.navigateByUrl(('/'));
    }
  
}
