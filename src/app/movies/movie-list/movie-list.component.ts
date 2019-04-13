import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Movie } from '../movies.model';
import { MovieService } from '../movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
 
  movies: Movie[] = [];
  private subscription: Subscription;
  term: string = '';



  

  constructor(private movieService: MovieService) { 
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  

  // onSelected(contact: Contact) {
  //   this.contactService.contactSelectedEvent.emit(contact);
  // }

  this.subscription = this.movieService.movieListChangedEvent
    .subscribe(
      (movie: Movie[]) => {
        this.movies = movie;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  onKeyPress(searchTerm: string ) {
    this.term = searchTerm;
  }
}
