import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterLogComponent} from './register-log/register-log.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CharacterComponent} from './character/character.component';
import {AuthGuard} from './auth.guard';
import {LoginGuard} from './login.guard';

const routes: Routes = [
    {path: 'login', canActivate: [LoginGuard],  component: LoginComponent},
    {path: '', canActivate: [LoginGuard],  component: LoginComponent},
    {path: 'registers', canActivate: [AuthGuard], component: RegisterLogComponent},
    {path: 'logout', canActivate: [AuthGuard], component: LoginComponent},
    {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
    {path: 'characters', canActivate: [AuthGuard], component: CharacterComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
