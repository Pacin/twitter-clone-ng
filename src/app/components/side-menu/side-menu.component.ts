import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBell, faEnvelope, faBookmark, faListAlt, faUser} from '@fortawesome/free-regular-svg-icons';
import {faHome, faHashtag, faEllipsisH, faTimes, faSignOutAlt,} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

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
  faSignOut = faSignOutAlt;
  moreMenuItems: any[] = [
    {text: 'Logout', callback: () => this.logout(), icon: faSignOutAlt}
  ]

  isTweetModalOpen: boolean = false;

  get user() {
    return this.authService.user || {};
  }
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
 
  toggleTweetModal() {
    this.isTweetModalOpen = !this.isTweetModalOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
