import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBell, faEnvelope, faBookmark, faListAlt, faUser} from '@fortawesome/free-regular-svg-icons';
import {faHome, faHashtag, faEllipsisH, faTimes, faSignOutAlt, faPlus} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import {isMobile, isTablet} from 'src/app/shared/utils';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  faTwitter = faTwitter;
  faBell = faBell;
  faEnvelope = faEnvelope;
  faBookmark = faBookmark;
  faListAlt = faListAlt;
  faUser = faUser;
  faHashtag = faHashtag;
  faHome = faHome;
  faEllipsisH = faEllipsisH;
  faTimes = faTimes;
  faPlus= faPlus;
  isTweetModalOpen: boolean = false;
  moreMenuItems: any[] = [
    {text: 'Logout', callback: () => this.logout(), icon: faSignOutAlt}
  ]

  get user() {
    return this.authService.user || {};
  }

  get isMobile() {
    return isMobile();
  }
  get isTablet() {
    return isTablet();
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
