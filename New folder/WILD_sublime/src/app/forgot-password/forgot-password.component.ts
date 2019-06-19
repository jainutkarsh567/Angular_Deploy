import { Component, OnInit } from '@angular/core';
import{Animal1Service} from '../animal1.service';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
user= {
username: '',
token:1,
}
message:any;
	constructor(private animalService: Animal1Service) { }

  ngOnInit() { }
  onForgot(){
	
	this.animalService.forgotPassword(this.user).subscribe(message => {
	this.message=message;
	});
	console.log(this.message);

}
}
