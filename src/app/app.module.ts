import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    DashboardComponent,
    FooterComponent,
    PostsComponent,
    DeletePostComponent,
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ SignInComponent, SignUpComponent, DeletePostComponent, PostsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
