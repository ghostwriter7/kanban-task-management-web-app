import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: 'sign-in', component: AuthComponent}, {path: 'sign-up', component: AuthComponent}]),
  ],
})
export class AuthModule { }
