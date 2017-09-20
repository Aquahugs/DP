import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment} from '../environments/environment'
import{ AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Upload } from './models/upload.model';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { UploadService } from './upload.service';
import {ImageFilterPipe} from './image/shared/filter.pipe'
import { UserService } from './services/user.service';
import { UploadService } from './services/upload.service';
import { AuthenticationService } from './services/authentication.service';
import { ImageService } from './services/image.service';
import { AuthenticationGuard } from './services/authenticationGuard.service';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { TeslaComponent } from './tesla/tesla.component';
import { HrComponent } from './hr/hr.component';
import { Iphone8Component } from './iphone8/iphone8.component';
import { DuyComponent } from './duy/duy.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

import {router} from './app.router'
import {routes} from './app.router';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent, 
    NavComponent,
    LandingpageComponent,
    NewsComponent,
    AboutComponent,
    PostComponent,
    TeslaComponent,
    HrComponent,
    Iphone8Component,
    DuyComponent,
    GalleryComponent,
    ImageDetailComponent,
    LoginComponent,
    UploadComponent,
    SignupComponent,
    ImageFilterPipe
  

  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    RouterModule.forRoot(router),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AlertModule.forRoot()
 
  ],
  providers: [AuthenticationGuard,
  AuthenticationService,
  ImageService,
  UploadService,
  UserService,
  ImageFilterPipe],
  bootstrap: [AppComponent]

  
})


export class AppModule { }
