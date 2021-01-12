import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { UserServiceService } from '../user-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  
  // user: any;
  name: string;
  surname: string;
  email: string;
  password: string;
  validatingForm: any;
  sign_in:String;
  


  constructor(public modalRef: MDBModalRef,public service: UserServiceService,
  public route: Router ) { }

  ngOnInit() {
    
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.required),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
 
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

  login(){
    var user: any[] = JSON.parse(localStorage.getItem('users')); 

    for (let i=0; i< user.length; i ++){
      if (user [i].sign_upName == this.loginFormModalEmail.value && user[i].sign_upPassword == this.loginFormModalPassword.value){
        this.sign_in = user[i].sign_upName;
    // var user: any[] = JSON.parse(localStorage.getItem('user'));
    this.sign_in='';
      this.route.navigate(['dashboard']);
      }
    }

  }
}
