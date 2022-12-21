import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';


const routes: Routes = [
  {
    path:'', component: SignupComponent
  },
  { path: 'auth/signup', loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule) },
  {path: 'login', component: LoginComponent},
  {path: 'quiz', component: QuizPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
