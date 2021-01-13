import { Component, OnInit } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';




@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService, ) { }

  ngOnInit() {
  }

}
