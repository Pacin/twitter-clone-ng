import { Component, Input, OnInit } from '@angular/core';
import { faImage, faCalendarAlt, faSmile, faChartBar, faFileImage} from '@fortawesome/free-regular-svg-icons';
import { faGlobeAmericas,} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tweet-input',
  templateUrl: './tweet-input.component.html',
  styleUrls: ['./tweet-input.component.scss']
})
export class TweetInputComponent implements OnInit {
  @Input() rows: string = '5';
  faGlobe = faGlobeAmericas;
  faImage = faImage;
  faCalender = faCalendarAlt;
  faSmile = faSmile;
  faChart = faChartBar;
  faFile = faFileImage;

  
  constructor() { }

  ngOnInit(): void {
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
