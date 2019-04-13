import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movies.model';

@Pipe({
  name: 'moviesFilter'
})
export class MoviesFilterPipe implements PipeTransform {

  transform(movies: any, [term]): any {
    let filteredArray:Movie[] = [];



    // for (let i=0; i<contacts.length; i++) {
    //   let contact = contacts[i];
    //   if(contact.name.toLowerCase90.includes(term)) {
    //     filteredArray.push(contact);
    //   }
    // }

    filteredArray = movies.filter(
      (movie: Movie) => movie.name.toLocaleLowerCase().includes(term.toLowerCase())
    );
    
    if (filteredArray.length < 1) {
      return movies;
    }
    return filteredArray;
  }

}
