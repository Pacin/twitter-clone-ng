import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { TweetDetailsPageComponent } from './pages/tweet-details-page/tweet-details-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path:'home', component: HomePageComponent, children: [
    {path:'', component: FeedPageComponent},
    {path:':userId', component:ProfilePageComponent},
    {path: 'tweets/:tweetId', component:TweetDetailsPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
