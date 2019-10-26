import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,DialogRole} from '@angular/material/dialog';

export interface DialogData {
  nom: string;
  prix: number;
  stock: number;
}


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  tableau: any= [
  {nom:'produit1', stock: 4, prix:500},
  {nom:'produit2', stock:5 , prix:7500},
  {nom:'produit3', stock:1, prix:100},
  {nom:'produit4', stock:9, prix:1500},
  {nom:'produit5', stock:20, prix:50},
  {nom:'produit6', stock: 10 , prix:200},
  {nom:'produit7', stock:7 ,prix:200},
  {nom:'produit8', stock:5, prix:200},
  {nom:'produit9', stock:4, prix:200},
  {nom:'produit10', stock:80, prix:200},
  {nom:'produit11', stock: 2, prix:200},
  {nom:'produit12', stock:0, prix:200},

];
filters=[{name: 'Promo'},{name:'En Rupture'},{name:'Top VEnte'}];
categories=[{name: 'Lait'},{name:'Boisson'},{name:'Condiment'}]
  valeur:number=0;
  check;
  

  constructor( public dialogue: MatDialog) {
    this.valeur=1;
   }

  ngOnInit() {
     
  }
  alertFiche_Product(nom, prix, stock){
    const dialogRef = this.dialogue.open( DialogOverviewExampleDialog, {role: 'alertdialog', data:{ nom: nom , prix: prix, stock: stock},
       width:'300px',height:'300px'} );
  }

}




@Component({
  selector: 'dialog-overview-example-dialog',
  template: '<h1>{{data.nom}}</h1> <h2>{{data.prix}}</h2> <h3>{{data.stock}}</h3>',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
