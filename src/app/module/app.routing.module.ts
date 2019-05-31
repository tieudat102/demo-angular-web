import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import { LoginLayoutComponent } from '../layouts/login-layout/login-layout.component';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { VideoPageComponent } from '../pages/video-page/video-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: VideoPageComponent }
    ]
  }
  ,
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [{path: '', component: LoginPageComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
