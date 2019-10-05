import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  tableau: any= [
  [{nom:'produit1', stock: 4},{nom:'produit2', stock:5},{nom:'produit3', stock:1},{nom:'produit4', stock:9},{nom:'produit5', stock:20}],
  [{nom:'produit6', stock: 10},{nom:'produit7', stock:7},{nom:'produit8', stock:5},{nom:'produit9', stock:4},{nom:'produit10', stock:80}],
  [{nom:'produit11', stock: 2},{nom:'produit12', stock:0},{nom:'produit13', stock:6},{nom:'produit14', stock:15},{nom:'produit15', stock:0}]

];
ta_essais :any[][];
  valeur:number=0;
  

  constructor() {
    this.valeur=1;
   }

  ngOnInit() {
     this.ruptur();
  }
  ruptur(){
    for(let i=0; i<3; i++){
      for(let j=0 ; j<5; j++){
        if(this.tableau[i][j].stock<5){
          this.ta_essais=this.tableau[i][j].nom;
          console.log(this.ta_essais);
        }
      }
    }
   
  }

}
