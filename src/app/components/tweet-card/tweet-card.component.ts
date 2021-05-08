import { Component, Input, OnInit } from '@angular/core';
import {faHeart, faComment, faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH, faTimes} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { TweetService } from 'src/app/services/tweet.service';
import { extractProfileImg } from 'src/app/shared/utils';
import {environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {
  @Input() size: string = 'md';
  @Input() type: string = 'tweet';
  @Input() tweet: any;
  faTimes = faTimes;
  faComment = faComment;
  faHeart = faHeart;
  faEllipsisH = faEllipsisH;
  faTrash = faTrashAlt;
  isReplyModalOpen: boolean = false;
  isImgModalOpen:boolean = false;
  menuItems: any[] = [
    {text:'Delete', icon:this.faTrash, callback: () => this.deleteTweet()}
  ]
  get tweetImg(): string {
    if (!this.tweet.image) return null;

    return `${env.baseURL}${this.tweet.image.url}`
  }

  get isOwner(): boolean {
    const userId = this.authService.user.id;
    const tweetUser = this.tweet.user.id;

    return userId === tweetUser;
  }

  get replyCount() {
    if (!this.tweet.replies) return 0;

    return this.tweet.replies.length;
  }

  get likeCount() {
    if (!this.tweet.likes) return 0;

    return this.tweet.likes.length;
  }

  get profileImg() {
    return extractProfileImg(this.tweet.user);
  }

  get user() {
    return this.authService.user;
  }

  constructor(
    private tweetService: TweetService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  closeReplyModal() {
    this.isReplyModalOpen = false;
  }

  replyTweet(event) {
    event.stopPropagation();
    if (this.type === 'reply') return;

    this.isReplyModalOpen = true;
  }

  likeTweet(event) {
    event.stopPropagation();
    if (this.type === 'reply') return;

    const isLikedByMe = this.tweet.likes.find(like => like.user === this.user.id);

    if (isLikedByMe) {
      this.tweetService.dislikeTweet(isLikedByMe.id);
    } else {
      this.tweetService.likeTweet(this.tweet.id);
    }
  }

  openImgModal(event) {
    event.stopPropagation();
    this.isImgModalOpen = true;
  }

  closeImgModal() {
    this.isImgModalOpen= false;
  }

  deleteTweet() {
  this.tweetService.deleteTweet(this.tweet.id);
  }
}
