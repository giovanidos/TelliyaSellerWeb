import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  Marcher:any=[
    {id:1, name:'Consommation', categorie:['biski','Bonbon'], marque:['neant']},
    {id:2, name:'Mode', categorie:['Veste','pujama'], marque:['neant', 'Cello', 'Cucci']},
    {id:3, name:'Librairie', categorie:['Livre','Cahier'], marque:['neant']},
    {id:4, name:'Informatique', categorie:['Ordinateur','USB'], marque:['neant','apple','Oppo']}
  ];
  table:string[];
  valuer:number;
  fileTOUpload: File= null;
  imageurl:string="";

  constructor() { }

  ngOnInit() {
    this.valuer=1;
   
  }
  ficherupload(file: FileList){
    this.fileTOUpload= file.item(0);
    var reader= new FileReader();
    reader.onload= (event: any) => {
      this.imageurl = event.target.resultat;
    }
    reader.readAsDataURL(this.fileTOUpload);
  }
}
