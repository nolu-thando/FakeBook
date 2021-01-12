import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  openModal() {
    this.modalRef = this.modalService.show(SignInComponent)
  }
  openBasic() {
    this.modalRef = this.modalService.show(SignUpComponent)
  }


  ngOnInit() {
  }

}
