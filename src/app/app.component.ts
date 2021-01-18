import { Component } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  basicModal() {
    this.modalRef = this.modalService.show(SignInComponent)
  }
  openBasic() {
    this.modalRef = this.modalService.show(SignUpComponent)
  }



}
