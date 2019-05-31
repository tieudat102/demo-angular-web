
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './module/marterial.module';
import { AppRoutingModule } from './module/app.routing.module';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { VideoViewComponent } from './components/video-view/video-view.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    LoginPageComponent,
    VideoPageComponent,
    LoginFormComponent,
    VideoViewComponent,
    VideoSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
