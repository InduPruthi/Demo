import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component'
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { HomeComponent } from './home/home.component';
import { ResturantFilterPipe } from './shared-folder/resturant-filter.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
const Leadroutes: Routes = [
  { path: 'home/:Name', component: HomeComponent },
  { path: '', component: WelcomeComponent, pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    RestaurantListComponent,
    HomeComponent, WelcomeComponent, ResturantFilterPipe, StarRatingComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(Leadroutes,)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
