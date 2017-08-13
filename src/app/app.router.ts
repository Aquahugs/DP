import{ ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NewsComponent } from './news/news.component';

export const router: Routes = [
	{ path:'', redirectTo:'app-landingpage', pathMatch: 'full'},
	{ path:'app-landingpage', component: LandingpageComponent},
	{ path:'app-news', component: NewsComponent}	
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);