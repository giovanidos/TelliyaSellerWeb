import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items = [
    {
      icon: "receipt",
      isSelected: true
    },
    {
      icon: "assignment",
      isSelected: false
    },
    {
      icon: "people_outline",
      isSelected: false
    },
    {
      icon: "business",
      isSelected: false
    }
  ]
  constructor() { }

  ngOnInit() {
  }


}
