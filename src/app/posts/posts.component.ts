import { Component, OnInit } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

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
