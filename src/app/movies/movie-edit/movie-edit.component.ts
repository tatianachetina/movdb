
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movies/movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Movie } from '../movies.model';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: Movie = null;
  originalMovie: Movie;
  groupMovies: Movie[] = [];
  editMode: boolean = false;
  hasGroup: boolean = false;
  invalidGroupMovie;


  constructor (private movieService: MovieService,
    private  router: Router,
    private route: ActivatedRoute) {
}

ngOnInit () {
  this.route.params
    .subscribe(
      (params: Params) => {
        const id = params.id;
        if (id == undefined || id == null) {
          this.editMode = false; 
          return;
        }
        this.originalMovie = this.movieService.getMovie(id);
        if (this.originalMovie == undefined || this.originalMovie == null) {
          return;
        }

        this.editMode = true;
        this.movie = JSON.parse(JSON.stringify(this.originalMovie));
        if (this.movie.group == undefined || this.movie.group == null) {
          return;
        }
        this.hasGroup = true;
        if (this.hasGroup) {
          this.groupMovies = JSON.parse(JSON.stringify(this.movie.group)).slice();
        }
      }
    )
}


onSubmit(form: NgForm) {
  const values = form.value // get values from form’s fields
  //Assign the values in the form fields to the corresponding properties in the newDocument
  var newMovie = new Movie('', values.name, values.email, values.phone, values.imageUrl, this.groupMovies)
  
  if (this.editMode === true) {
   this.movieService.updateMovie(this.originalMovie, newMovie);
  } else {
   this.movieService.addMovie(newMovie);
  }
  this.router.navigate(['/movies']);
  }

  onCancel() {
    
    this.router.navigate(['/movies']);
  }

  isInvalidMovie(newMovie: Movie) {
    if (!newMovie) {
      return true;
    }

    if (this.movie && newMovie.id === this.movie.id) {
      return true;
    }

    for (let i = 0; i < this.groupMovies.length; i++) {
      if (newMovie.id === this.groupMovies[i].id) {
        return true;
      }
    }
    return false;
  }

  addToGroup($event: any) {
    let selectedMovie: Movie = $event.dragData;
    this.invalidGroupMovie = this.isInvalidMovie(selectedMovie);
    if (this.invalidGroupMovie) {
      return;
    }
    this.groupMovies.push(selectedMovie);
    this.invalidGroupMovie = false;
  }

  onRemoveItem(idx: number) {
    if (idx < 0 || idx >= this.groupMovies.length) {
      return;
    }
    this.groupMovies.splice(idx, 1);
    this.invalidGroupMovie = false;
  }

}
