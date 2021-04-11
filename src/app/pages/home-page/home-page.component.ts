import { Component, OnInit } from '@angular/core';
import {faHome, faHashtag, faEllipsisH, faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  faHashtag = faHashtag;
  faSearch = faSearch;
  adImages: any[] = [
    { imgUrl: 'https://unsplash.it/120/101'},
    { imgUrl: 'https://unsplash.it/120/102'},
    { imgUrl: 'https://unsplash.it/120/103'},
    { imgUrl: 'https://unsplash.it/121/100'},
    { imgUrl: 'https://unsplash.it/122/100'},
    { imgUrl: 'https://unsplash.it/123/100'}
  ]

  users:any[] = [
    {
      id: 1,
      imgUrl: 'https://unsplash.it/50/50',
      name:'Jake',
      username: '@jakeuser'
    },
    {
      id: 2,
      imgUrl: 'https://unsplash.it/51/50',
      name:'Jane',
      username: '@janeuser'
    },    
    {
      id: 3,
      imgUrl: 'https://unsplash.it/50/51',
      name:'Alice',
      username: '@aliceuser'
    }
  ]

  trends: any[] = [
    {id:1, category: 'Category 1', hashtag: 'Hashtag 1', tweetCount: '13.3'},
    {id:2, category: 'Category 2', hashtag: 'Hashtag 2', tweetCount: '12.1'},
    {id:3, category: 'Category 3', hashtag: 'Hashtag 3', tweetCount: '15.2'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}