import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items = [
    {
      icon: "home",
      name: "Home"
    },
    {
      icon: "assignment",
      name: "Ventes"
    },
    {
      icon: "shopping_basket",
      name: "Achats"
    },
    {
      icon: "assessment",
      name: "Rapport"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
