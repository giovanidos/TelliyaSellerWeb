import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu_actions = {
    // 'affiche-menu': false,
    'cache-menu': false,
    'humberger-overlay': false
  }
  
  constructor() { }

  ngOnInit() {
  }

  hideMenu(event){
    this.menu_actions["cache-menu"] = true;
    console.log("close");
  }

  openMenu(){
    this.menu_actions["humberger-overlay"] = true; 
    this.menu_actions["cache-menu"] = false;
    console.log("open");
  }

}
