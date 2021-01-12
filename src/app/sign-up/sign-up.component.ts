import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { UserServiceService } from '../user-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;

  users: any = [];

  constructor(public modalRef: MDBModalRef,
    public service: UserServiceService, private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalEmail: new FormControl('', Validators.required),
      signupFormModalPassword: new FormControl('', Validators.required),
    });

    this.users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    console.log(this.users);

  }

  get signupFormModalName() {
    return this.registerForm.get('signupFormModalName');
  }

  get signupFormModalEmail() {
    return this.registerForm.get('signupFormModalEmail');
  }

  get signupFormModalPassword() {
    return this.registerForm.get('signupFormModalPassword');
  }

  sign_up() {

  
    //--- w. get name, email and password
   const user = {
      name: this.registerForm.value.signupFormModalName,
      email: this.registerForm.value.signupFormModalEmail,
      password: this.registerForm.value.signupFormModalPassword
    }

    // z. check if a specific user exists in the local storage

    const userExits = this.users.filter(temp_user => temp_user.email == user.email );
    
    if(userExits.length > 0) {
      // a. dont add user into a local storage, if he exists
      window.alert('user already exists exists');
      return;
    } else {
      // 99. add user into localstorage if he doesnt exists
      window.alert('Registered successfully');

      this.users.push(user);
      
      localStorage.setItem('users', JSON.stringify(this.users));

    }
  



    

    


  }

}