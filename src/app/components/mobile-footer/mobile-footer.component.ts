import { Component, OnInit } from '@angular/core';
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.scss']
})
export class MobileFooterComponent implements OnInit {
faHome = faHome;
faBell = faBell;
faSearch = faSearch;
faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
