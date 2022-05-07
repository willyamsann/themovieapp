import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  title = 'themovieapp';
  filme: any;
  isReady = false;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router
  ) {
    console.log('es');
    this.route.params.subscribe((res) => {
      this.moviesService.getByMovie(res['id']).subscribe((movie) => {
        this.filme = movie;
        this.isReady = true;
      });
    });
  }

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
