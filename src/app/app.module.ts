import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
