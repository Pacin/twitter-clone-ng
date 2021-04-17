import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
@Input() name:string = 'default-tabs';
@Input() tabs:any[] = [];
@Input() selectedTab: string;
@Output() select = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selecTab(selectedValue) {
    this.select.emit(selectedValue);
  }
}
