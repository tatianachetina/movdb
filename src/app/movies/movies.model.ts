export class Movie {

    constructor(public id: string,
        public name: string, 
        public year: string, 
        public genre: string,
        public date: string, 
        public group: Movie []) {
      }
}