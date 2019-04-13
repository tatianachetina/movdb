import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
//import {DndModule} from 'ng2-dnd';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { AppRoutingModule } from './app-routing';
import { WindRefService } from './win-ref.service';
import { MoviesFilterPipe } from './movies/movies-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieListComponent,
    MovieEditComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MoviesFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    //DndModule.forRoot()
  ],
  providers: [WindRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
