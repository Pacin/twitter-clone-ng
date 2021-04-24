import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {faArrowLeft, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import {environment as env} from 'src/environments/environment';
 
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faMapMarkerAlt =faMapMarkerAlt;
  user:any = {};
  tweets: any[] = [];

  followerImages: any[] = [
    'https://unsplash.it/18/18',
    'https://unsplash.it/18/19',
    'https://unsplash.it/19/18'
  ];

  profileTabs: any[] = [
    {title: 'Tweets', value: 't'},
    {title: 'Tweets & Replies', value: 't-r'},
    {title: 'Media', value: 'm'},
    {title: 'Likes', value: 'l'}
  ];

  selectedProfileTab:string = 't';

  get isMyProfile() {
    return this.user.id === this.authService.user.id;
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.fetchProfile(param.userId);
      this.fetchProfileTweets(param.userId);
    })
  }

  setProfileTab(selectedTabValue) {
    this.selectedProfileTab = selectedTabValue;
  }

  fetchProfile(id:string) {
    this.http.get(`${env.baseURL}/users/${id}`)
      .subscribe((data: any) => this.user = data);
  }

  fetchProfileTweets(id:string) {
    this.http.get(`${env.baseURL}/tweets?user=${id}&&_sort=created_at:desc`)
      .subscribe((data:any) => this.tweets = data);
}
}
