import { Component, Input, OnInit } from '@angular/core';
import {faChevronDown, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faHeart, faComment} from '@fortawesome/free-regular-svg-icons';
import {environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {
  @Input() size: string = 'md';
  @Input() tweet: any;
  @Input() type: string = 'tweet';
  faChevronDown = faChevronDown;
  faTimes = faTimes;
  faHeart = faHeart;
  faComment = faComment;
  isReplyModalOpen: boolean = false;

  get profileImg() {
    try{
      const imgUrl =  this.tweet.user.profileImg.formats.thumbnail.url;

      return `${env.baseURL}${imgUrl}`;
    } catch {
      return env.placeholderProfileImg;
    }

  }

  get replyCount() {
    if(!this.tweet.replies) return 0;
    return this.tweet.replies.length;
  }
  constructor() { }

  ngOnInit(): void {
  }

  
  closeReplyModal() {
    this.isReplyModalOpen = false;
  }

  replyTweet(event) {
    event.stopPropagation();
    if(this.type === 'reply') return;
    
    this.isReplyModalOpen = true;
    
  }

}
