import { Injectable } from '@angular/core';
import { Database, onValue, push, ref, set } from '@angular/fire/database';
import { Observable } from 'rxjs';

interface Item {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FbServiceService {
  constructor(private database: Database) { }
  addCatalog(catalog: string, item: Item) {
    let catalogs = ref(this.database, `catalogs/${catalog}`);
    let newItemRef = push(catalogs);
    return set(newItemRef, item);
  }

  getItems(catalog: string): Observable<Item[]> {
    const itemsRef = ref(this.database, `catalogs/${catalog}`);
    return new Observable<Item[]>(observer => {
      onValue(itemsRef, snapshot => {
        const items: Item[] = [];
        snapshot.forEach(childSnapshot => {
          const item = childSnapshot.val() as Item;
          items.push(item);
        });
        observer.next(items);
      });
    });
  }

}
