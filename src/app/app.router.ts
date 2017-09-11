import{ ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
//import { TeslaComponent } from './tesla/tesla.component';
//import { HrComponent } from './hr/hr.component';
//import { Iphone8Component } from './iphone8/iphone8.component';
//import { DuyComponent } from './duy/duy.component';


import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { AuthenticationGuard } from './services/authenticationGuard.service';



export const router: Routes = [
	{ path:'', redirectTo:'app-landingpage', pathMatch: 'full', canActivate: [AuthenticationGuard]},
	{ path:'app-landingpage', component: LandingpageComponent, canActivate: [AuthenticationGuard]},
	{ path:'app-news', component: NewsComponent, canActivate: [AuthenticationGuard]},
	{ path:'app-about', component: AboutComponent, canActivate: [AuthenticationGuard]},
	
	{ path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard]},
	{ path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
	{ path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuard]},
	{ path: 'login', component: LoginComponent,}
	


	// { path:'app-tesla', component: TeslaComponent},
	// { path:'app-hr', component: HrComponent},
	// { path:'app-iphone8', component: Iphone8Component},
	// { path:'app-duy', component: DuyComponent}				
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);