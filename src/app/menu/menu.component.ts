import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items = [
    {
      icon: "home.svg",
      name: "Home",
      isSelected: true
    },
    {
      icon: "vente.svg",
      name: "Ventes",
      isSelected: false
    },
    {
      icon: "achat.svg",
      name: "Achats",
      isSelected: false
    },
    {
      icon: "stock.svg",
      name: "Stocks",
      isSelected: false
    },
    {
      icon: "client.svg",
      name: "Clients"
    },
    {
      icon: "fournisseurs.svg",
      name: "Fournisseurs",
      isSelected: false
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

  menuItemClickAction(item){
    this.items.forEach(function(element,indext){element.isSelected = false;});
      this.items.find((element) => element == item ).isSelected = true;
  }

}
