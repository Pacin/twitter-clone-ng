import { Component, OnInit } from '@angular/core';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBell, faEnvelope, faBookmark, faListAlt, faUser} from '@fortawesome/free-regular-svg-icons';
import {faHome, faHashtag, faEllipsisH, faTimes,} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  faBell = faBell;
  faEnvelope = faEnvelope;
  faBookmark = faBookmark;
  faListAlt = faListAlt;
  faUser = faUser;
  faHome = faHome;
  faHashtag = faHashtag;
  faEllipsisH = faEllipsisH;
  faTwitter = faTwitter;
  faTimes = faTimes;

  isTweetModalOpen: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
 
  toggleTweetModal() {
    this.isTweetModalOpen = !this.isTweetModalOpen;
  }

}
