import { Component, OnInit } from '@angular/core';
import { Item } from '../artigos-form/artigos-form.component';
import { ItemsServiceService } from '../shared/items-service.service';

@Component({
  selector: 'app-artigos-list',
  templateUrl: './artigos-list.component.html',
  styleUrls: ['./artigos-list.component.scss']
})
export class ArtigosListComponent implements OnInit {
  items: Item[]; 
  
  
  constructor(private is: ItemsServiceService) {
    this.is.getItems().subscribe(data => {
      this.items = data.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Item;
      })  
    });
   }

  ngOnInit() {
  }

  deleteItem(id) {
    this.is.deleteItem(id);
  }

  isReadyFn(item: Item) {
    console.log('item click', item);
    item.isReady = !item.isReady; 
    console.log('item click2', item);
    this.is.updateItem(item);     
  }

}
