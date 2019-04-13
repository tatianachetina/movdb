import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from './movies.model';
import { MOCKMOVIES } from './MOCKMOVIES';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
}

)
export class MovieService {
  movieSelectedEvent = new EventEmitter<Movie>();
  movieChangedEvent = new EventEmitter<Movie[]>();  
  movieListChangedEvent = new Subject<Movie[]>();
    
  movies: Movie[] = [];
  maxMovieId: number;
  moviesListClone: Movie[];

  constructor(private httpClient: HttpClient, private movieService: MovieService) {
        this.movies = MOCKMOVIES;
        this.maxMovieId = this.getMaxId();
    }

    getMovies() {
      this.httpClient.get('https://localhost:3000/movies')
        .subscribe(
          (movies: Movie[]) => {
            this.movies = movies;
            this.maxMovieId = this.getMaxId();
            this.movieListChangedEvent.next(this.movies.slice());
          }
        );
      //error function
      (error: any) => {
        console.log(error);
      }
      return this.movies.slice();
    }
    


    getMovie(id: string): Movie {

        for (let i = 0; i < this.movies.length; i++) {
          if (this.movies[i].id === id) {
            return this.movies[i];
          }
        }
        return null;
    }

    deleteMovie(movie: Movie) {
      if (!movie) {
        return;
      }
  
      this.httpClient.delete('http://localhost:3000/movies/' + movie.id)
        // .map(
        //   (res: Response) => {
        //     return res.json().obj;
        // })
        .subscribe(
          (movies: Movie[]) => {
            this.movies = movies;
            this.movieListChangedEvent.next(this.movies.slice());
          });
        }

    getMaxId(): number {

      let maxId = 0
  
      for (let i =0;  i < this.movies.length; i++) {
        let currentId = +this.movies[i].id;
  
        if (currentId > maxId) {
          maxId = currentId;
        }
      }
  
      return maxId;
    }

addMovie(newMovie: Movie) {
  if(!newMovie){
    return
  }
  
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  
  newMovie.id = '';
  const strMovie = JSON.stringify(newMovie);
  
  this.httpClient.post('http://localhost:3000/movies', strMovie, {headers: headers})
  // .map((response: Response) => {
  //   return response.json()
  // })
  .subscribe((movies: Movie[]) => {
    this.movies = movies;
    this.movieListChangedEvent.next(this.movies.slice())
  })
  }

    updateMovie(originalMovie: Movie, newMovie: Movie) {
      if (originalMovie == undefined || originalMovie == null 
        || newMovie == undefined || newMovie ==  null) {
          return;
        }
      

      var pos = this.movies.indexOf(originalMovie)
      if (pos < 0) {
          return;
      }

      newMovie.id = originalMovie.id
      this.movies[pos] = newMovie
      this.moviesListClone = this.movies.slice()
      this.movieListChangedEvent.next(this.moviesListClone)
    }
}