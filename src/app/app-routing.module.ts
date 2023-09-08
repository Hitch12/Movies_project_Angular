import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MediaDetilsComponent } from './media-detils/media-detils.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfondComponent } from './notfond/notfond.component';
import { PeopleComponent } from './people/people.component';
import { PeopledeteilsComponent } from './peopledeteils/peopledeteils.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tv',component:TvComponent},
  {path:'people',component:PeopleComponent},
  {path:'media-detils/:id/:media_type',component:MediaDetilsComponent},
  {path:'peopledeteils/:id/:media_type',component:PeopledeteilsComponent},

  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent},
  {path:'**',component:NotfondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
