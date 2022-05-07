import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey: string = '630465ec43ac58b16360a94184292e7a';
  private urlMovieDb: string = 'https://api.themoviedb.org/3';
  constructor(private httpClient: HttpClient) {}

  getMovies(page: number): Observable<any> {
    let url = `${this.urlMovieDb}/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=${page}`;

    return this.httpClient.get<any>(url).pipe(retry(2));
  }

  getByMovie(id: string): Observable<any> {
    let url = `${this.urlMovieDb}/movie/${id}?api_key=${this.apiKey}&language=pt-BR&page=1`;

    return this.httpClient.get<any>(url).pipe(retry(2));
  }
}
