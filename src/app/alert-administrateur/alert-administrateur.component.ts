import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-administrateur',
  templateUrl: './alert-administrateur.component.html',
  styleUrls: ['./alert-administrateur.component.scss']
})
export class AlertAdministrateurComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  send(x){
    console.log(x.value);
  }

}
