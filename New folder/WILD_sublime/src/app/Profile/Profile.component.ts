import { Component, OnInit } from '@angular/core';
import {Animal1Service} from '../animal1.service';
@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {
  login: boolean;
  constructor(private animalService: Animal1Service) { 
  localStorage.getItem('uname');
  this.login=true;
  this.animalService.dataFromService=this.login;}

  ngOnInit() {
  }
  logout()
  {
  this.login=false;
  this.animalService.dataFromService=this.login;
  localStorage.clear();
  }
  }


