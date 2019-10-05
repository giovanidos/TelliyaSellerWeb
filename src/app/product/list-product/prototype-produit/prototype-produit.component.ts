import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prototype-produit',
  templateUrl: './prototype-produit.component.html',
  styleUrls: ['./prototype-produit.component.scss']
})
export class PrototypeProduitComponent implements OnInit {
  star_table: string []=['star_border', 'star_border','star_border','star_border','star_border'];

  point: number=14
  ;
  nbre_vote: number= 5;
  nbre_etoile:number;

  constructor() {

   }

  ngOnInit() {
    this.star();  
  }
  star(){
    this.nbre_etoile=(this.point)/(this.nbre_vote);
    let nbre_essai=Math.round(Number.parseFloat(this.nbre_etoile.toFixed(1)));
    console.log(this.nbre_etoile);
    for(let i=0; i<Math.floor(this.nbre_etoile);i++){
        this.star_table[i]='star';
       }
    if(nbre_essai > Math.floor(this.nbre_etoile)){
      this.star_table[Math.floor(this.nbre_etoile)]='star_half';
    }
    
  }

}
