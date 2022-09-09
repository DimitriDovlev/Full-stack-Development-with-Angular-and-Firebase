import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  totalLikes: number = 0;
  movieEmitter: EventEmitter<Movie[]> = new EventEmitter<Movie[]>();
  selectedMovieEmitter: EventEmitter<Movie> = new EventEmitter<Movie>();
  likesEmitter: EventEmitter<number> = new EventEmitter<number>();
  likedMovieEmitter: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() {}

  fetchMovies() {
    fetch('https://movies-api-sedc.herokuapp.com/movies')
      .then((data) => data.json())
      .then((movies: Movie[]) => {
        console.log(movies);
        
        this.movieEmitter.emit(movies);
      });
  }

  onMovieSelect(movie: Movie) {
    this.selectedMovieEmitter.emit(movie);
  }

  addLike(selectedMovie: Movie) {
    this.totalLikes++;
    this.likesEmitter.emit(this.totalLikes);
    this.likedMovieEmitter.emit(selectedMovie);
  }
}
