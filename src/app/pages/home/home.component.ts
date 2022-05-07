import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'themovieapp';
  movies: any = [];
  page: number = 1;
  isReady = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies(this.page);
  }

  getMovies(page: number) {
    console.log(page);
    this.page = page;
    this.moviesService.getMovies(page).subscribe((datas: any) => {
      this.movies = datas?.results;
      console.log(datas);
      this.isReady = true;
    });
  }
}
