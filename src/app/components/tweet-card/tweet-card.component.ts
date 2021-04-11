import { Component, Input, OnInit } from '@angular/core';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {
  @Input() tweet: any;
  faChevronDown = faChevronDown;
  faHeart = faHeart;
  constructor() { }

  ngOnInit(): void {
  }

}
