import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movies.model';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'cms-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onSelected() {
    this.movieService.movieSelectedEvent.emit(this.movie);
  }


}

