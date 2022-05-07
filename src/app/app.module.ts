import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from '../app/components/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesService } from './services/movies.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InformationComponent } from './components/information/information.component';
@NgModule({
  declarations: [
    CardsComponent,
    HomeComponent,
    InformationComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
