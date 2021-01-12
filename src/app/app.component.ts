import { Component, OnInit } from '@angular/core';
import { DataService } from './Services/data.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TaksApp';
  constructor (private data:DataService){



  }
  ngOnInit(): void {
    this.setCurrentuser();
  }

  setCurrentuser(){


    const user:User = JSON.parse(localStorage.getItem('user'));
    this.data.setcurrentUser(user)

  }



}
