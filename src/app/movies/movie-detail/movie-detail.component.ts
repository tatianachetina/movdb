import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies.model';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  id: string;

  //@Input() contact: Contact;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,) { }

    ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = params['id'];
            this.movie = this.movieService.getMovie(this.id);
          }
        );
    }

    onDelete(){
      this.movieService.deleteMovie(this.movie)
      this.router.navigate(['movies']);
     }



}