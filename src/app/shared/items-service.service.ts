import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Item } from '../artigos-form/artigos-form.component';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

  private key = "items";

  constructor(private fs: AngularFirestore) { }

  getItems() {
    return this.fs.collection(this.key).snapshotChanges();
  }

  createItem(item: Item) {
    return this.fs.collection(this.key).add(item);
  }

  updateItem(item: Item) {
    console.log('item', item);
    const id = item.id;
    delete item.id;
    console.log('data', id);  
    this.fs.doc(this.key+'/'+id).update(item);
  }

  deleteItem( id: string ) {
    this.fs.doc(this.key+'/'+id).delete();
  }
}
