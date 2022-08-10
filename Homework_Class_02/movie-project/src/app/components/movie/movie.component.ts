import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/helpers/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor() {}

  @Input() movieTitle: string;
  @Output() movieToSendToParent: EventEmitter<Movie> =
    new EventEmitter<Movie>();

  movie1: Movie = {
    name: 'MovieName',
    releaseDate: '01/01/2022',
    producerName: 'ProducerName',
    genre: 'Genre',
  };

  sendMovieToParent() {
    this.movieToSendToParent.emit(this.movie1);    
  }
  ngOnInit(): void {}
}
