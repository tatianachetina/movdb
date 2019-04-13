import {Movie} from './movies.model';

export const MOCKMOVIES: Movie[] = [
  // individual contacts
  // index 0
  {
    id: '1',
    name: 'Wonder',
    year: '2017',
    genre: 'Family',
    date: '07.10.2018',
    group: null
  },
  // index 1
  {
    id: '2',
    name: 'Free-Solo',
    year: '2018',
    genre: 'Documentary',
    date: '07.10.2018',
    group: null
  },
  // index 2
  {
    id: '3',
    name: 'Bohemian Rhapsody',
    year: '2018',
    genre: 'Musical',
    date: '07.10.2018',
    group: null
  },
  // index 3
  {
    id: '5',
    name: 'Adrift',
    year: '2018',
    genre: 'Thriller',
    date: '07.10.2018',
    group: null
  },
  

  // genre
  // index 13
  {
    id: '4', name: 'Thriller', year: ' ', genre: ' ', date: ' ', group: [
        {
            id: '5',
            name: 'Adrift',
            year: '2018',
            genre: 'Thriller',
            date: '07.10.2018',
            group: null
          }
    
  ]
  },

  // index 14
  {
    id: '6', name: 'Documentary', year: ' ', genre: ' ', date: ' ', group: [
        {
            id: '2',
            name: 'Free-Solo',
            year: '2018',
            genre: 'Documentary',
            date: '07.10.2018',
            group: null
          }
    
  ]
  },

  // index 15
  {
    id: '10', name: 'Family', year: ' ', genre: ' ', date: ' ', group: [
        {
            id: '1',
            name: 'Wonder',
            year: '2017',
            genre: 'Family',
            date: '07.10.2018',
            group: null
          }
    
  ]
  },

  // index 16
  {
    id: '14', name: 'Musical', year: ' ', genre: ' ', date: ' ', group: [
        {
            id: '3',
            name: 'Bohemian Rhapsody',
            year: '2018',
            genre: 'Musical',
            date: '07.10.2018',
            group: null
          }
    
  ]
  },

  // index 17
  {
    id: '18', name: 'Comedy', year: ' ', genre: ' ', date: ' ', group: [
   
  ]
  }
];
