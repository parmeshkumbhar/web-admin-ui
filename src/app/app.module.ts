import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes =[
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'help-desk', component:HelpDeskComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HelpDeskComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
