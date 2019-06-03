
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from './module/marterial.module';
import { AppRoutingModule } from './module/app.routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { VideoViewComponent } from './components/video-view/video-view.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    LoginPageComponent,
    VideoPageComponent,
    LoginFormComponent,
    VideoViewComponent,
    VideoSearchComponent,
    HeaderComponent,
    HomePageComponent,
    RegisterFormComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
