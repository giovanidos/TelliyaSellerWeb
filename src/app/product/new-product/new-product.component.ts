import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  Marcher:any=[
    {id:1, name:'Consommation', categorie:['biski','Bonbon','tele',"radio","ggegoen"], marque:['neant']},
    {id:2, name:'Mode', categorie:['Veste','pujama'], marque:['neant', 'Cello', 'Cucci']},
    {id:3, name:'Librairie', categorie:['Livre','Cahier'], marque:['neant']},
    {id:4, name:'Informatique', categorie:['Ordinateur','USB'], marque:['neant','apple','Oppo']}
  ];
  table:string[];
  valuer:number;
  fileTOUpload: File= null;
  imageurl:string="";

  constructor() { }

  // ngOnInit() {
    
   
  // }
  ficherupload(file: FileList){
    this.fileTOUpload= file.item(0);
    var reader= new FileReader();
    reader.onload= (event: any) => {
      this.imageurl = event.target.resultat;
    }
    reader.readAsDataURL(this.fileTOUpload);
  }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.valuer=1;
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
