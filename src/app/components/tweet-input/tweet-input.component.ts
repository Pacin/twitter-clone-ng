import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faImage, faCalendarAlt, faSmile, faChartBar, faFileImage} from '@fortawesome/free-regular-svg-icons';
import { faGlobeAmericas,} from '@fortawesome/free-solid-svg-icons';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet-input',
  templateUrl: './tweet-input.component.html',
  styleUrls: ['./tweet-input.component.scss']
})
export class TweetInputComponent implements OnInit {
  @Input() rows: string = '5';
  @Input() parentTweet: any;
  faGlobe = faGlobeAmericas;
  faImage = faImage;
  faCalender = faCalendarAlt;
  faSmile = faSmile;
  faChart = faChartBar;
  faFile = faFileImage;
  
  tweetText = new FormControl('');
  isLoading: boolean = false;

  
  constructor(
    private tweetService: TweetService
  ) { }

  ngOnInit(): void {
  }

  sendTweet() {
    this.isLoading = true;
    this.tweetService.sendTweet(this.tweetText.value)
      .subscribe((data:any) => {
        this.tweetService.fetchTweets();
        this.tweetText.reset();
        this.isLoading = false;
      })
  }

  replyTweet() {
    this.isLoading = true;
    this.tweetService.replyTweet(this.tweetText.value, this.parentTweet.id)
      .subscribe(data => {
        this.tweetService.fetchTweets();
        this.tweetText.reset();
        this.isLoading = false;
      })
  }

  modalActions = [
    {
      icon: faImage, method: this.addImage
    },
    {
      icon: faFileImage, method: this.addGif
    },
    {
      icon: faChartBar, method: this.addVote
    },
    {
      icon: faSmile, method: this.addEmoji
    },
    {
      icon: faCalendarAlt, method: this.addDate
    }
  ]
    isTweetModalOpen: boolean = false;
  

  
  toggleTweetModal() {
      this.isTweetModalOpen = !this.isTweetModalOpen;
    }
  
    addGif() {
  
    }
    addVote() {
  
    }
    addEmoji() {
  
    }
    addDate() {
  
    }
    addImage() {
  
    }

}
