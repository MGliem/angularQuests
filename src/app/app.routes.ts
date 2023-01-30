import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-up', component: SignUpComponent }
];

export { routes };