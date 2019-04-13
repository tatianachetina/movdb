import { NgModule } from "@angular/core"; 
import { Routes, RouterModule} from "@angular/router"; 


import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

const appRoutes: Routes = [
    { path : 'movies', component: MoviesComponent,children:[
        { path : 'new', component:  MovieEditComponent},
        { path : ':id', component: MovieDetailComponent },
        { path : ':id/edit', component: MovieEditComponent}, 
    ]}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}