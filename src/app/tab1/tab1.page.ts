import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Database, push, ref, set } from '@angular/fire/database';
import { FbServiceService } from '../service/fb-service.service';

interface Item {
  name: string;
  description: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  private database = inject(Database);
  constructor(private dataServices: FbServiceService) {
  }
  ngOnInit(): void {
    this.addItem()
  }
  addItem() {
    const newItem = { name: 'Item Name', description: 'Item Description' };
    this.dataServices.addCatalog('usarios', newItem).then(() => {
      console.log('Item added successfully!');
    }).catch(error => {
      console.error('Error adding item: ', error);
    });
  }
}
