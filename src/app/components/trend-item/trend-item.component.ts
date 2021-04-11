import { Component, Input, OnInit } from '@angular/core';
import {} from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-trend-item',
  templateUrl: './trend-item.component.html',
  styleUrls: ['./trend-item.component.scss']
})
export class TrendItemComponent implements OnInit {
faChevronDown = faChevronDown;
@Input() trend: any;

  constructor() { }

  ngOnInit(): void {
  }

  
}
