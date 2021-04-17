import { Component, OnInit } from '@angular/core';
import {faArrowLeft, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faMapMarkerAlt =faMapMarkerAlt;
  tweets: any[] = [
    {
      id:1, 
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae eius consectetur mollitia sed impedit, voluptatem harum debitis amet ullam adipisci soluta nesciunt, optio temporibus incidunt? Obcaecati laboriosam doloremque iur.',
      created_at: '18h',
      user: {
        id:1,
        name: 'Jake',
        username: '@jakeuser',
        imgUrl: 'https://unsplash.it/51/50'
      }
    },
    {
      id:2, 
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae eius consectetur mollitia sed impedit, voluptatem harum debitis amet ullam adipisci soluta nesciunt, optio temporibus incidunt? Obcaecati laboriosam doloremque iur.',
      created_at: '15h',
      user: {
        id:2,
        name: 'Jane',
        username: '@janeuser',
        imgUrl: 'https://unsplash.it/50/51'
      }
    },
    {
      id:3, 
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae eius consectetur mollitia sed impedit, voluptatem harum debitis amet ullam adipisci soluta nesciunt, optio temporibus incidunt? Obcaecati laboriosam doloremque iur.',
      created_at: '12h',
      user: {
        id:3,
        name: 'Bob',
        username: '@bobuser',
        imgUrl: 'https://unsplash.it/50/52'
      }
    },
  ];

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

  constructor() { }

  ngOnInit(): void {
  }

  setProfileTab(selectedTabValue) {
    this.selectedProfileTab = selectedTabValue;
  }
}
