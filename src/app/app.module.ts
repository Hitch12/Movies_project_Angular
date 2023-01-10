import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavparComponent } from './navpar/navpar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { NotfondComponent } from './notfond/notfond.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './games/games.component';
import { MediaDetilsComponent } from './media-detils/media-detils.component';
import { SolveImagePipe } from './solve-image.pipe';
import { PeopledeteilsComponent } from './peopledeteils/peopledeteils.component'
@NgModule({
  declarations: [
    AppComponent,
    NavparComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    NotfondComponent,
    GamesComponent,
    MediaDetilsComponent,
    SolveImagePipe,
    PeopledeteilsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
