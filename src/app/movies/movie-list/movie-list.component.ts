import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'cw-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[];
  @Output() movieClicked = new EventEmitter();

  private clickedMovie: Movie;

  constructor() {
  }

  ngOnInit() {

  }

  onMovieClicked(movie: Movie): void {
    this.movieClicked.emit(movie);
    this.clickedMovie = movie;
  }
}
