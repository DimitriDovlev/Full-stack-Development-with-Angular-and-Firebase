import { Component, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/helpers/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  name = 'temp';
  releaseDate = 'temp';
  producerName = 'temp';
  genre = 'temp';
  
  @Input() movieListTitle: string;
  @Input() movieTitle: string;
  constructor() {}

  onMovieReceived(value: any) {
    const { name, releaseDate, producerName, genre } = value;
    this.name = name;
    this.releaseDate = releaseDate;
    this.producerName = producerName;
    this.genre = genre;
  }

  ngOnInit(): void {}
}
