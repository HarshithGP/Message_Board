import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesComponent } from './messages-component';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { NewMessageComponent } from './new-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { UserComponent } from './user.component';

var routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'messages',
  component: MessagesComponent
},
{
  path:'messages/:name',
  component: MessagesComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'user',
  component: UserComponent
}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes), BrowserModule, MaterialModule,
  HttpModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule ],
  declarations: [ UserComponent, LoginComponent, RegisterComponent, HomeComponent,
  AppComponent, MessagesComponent, NewMessageComponent, NavComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ WebService, AuthService ]
})
export class AppModule { }
