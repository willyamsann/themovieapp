import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  title = 'themovieapp';
  filme: any;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location
  ) {}

  ngOnInit(): void {}
}
