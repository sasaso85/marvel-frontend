import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterLogComponent} from './register-log/register-log.component';
import {MenuComponent} from './menu/menu.component';

import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpInterceptorService} from './HttpInterceptorService';
import {LogoutComponent} from './logout/logout.component';
import { CharacterComponent } from './character/character.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterLogComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    CharacterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
