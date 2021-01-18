import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { UserServiceService } from '../user-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  modalRef: MDBModalRef;

  
  // user: any;
  name: string;
  surname: string;
  email: string;
  password: string;
  validatingForm: any;
  sign_in:String;

  


  constructor(private modalService: MDBModalService,
  public route: Router ) { }

  ngOnInit() {
    
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.required),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
 
  }
  openBasic() {
    this.modalRef = this.modalService.show(SignUpComponent)
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
