import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import { LoginLayoutComponent } from '../layouts/login-layout/login-layout.component';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { VideoPageComponent } from '../pages/video-page/video-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent},
      { path: 'video/location', component: VideoPageComponent }
    ]
  }
  ,
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {path: 'login', component: LoginPageComponent },
      {path: 'register', component: RegisterPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
