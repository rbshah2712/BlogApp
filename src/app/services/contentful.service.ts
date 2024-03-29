import { Injectable } from '@angular/core';
import { createClient,Entry } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space : '4p4a0ibcbhiq',
    accessToken: '6AANkxINbfG6ZKR54k_WyxFKrqpoYLOiwTrx3Nn4p1I'
  });

  getAllEntries(){
    const promise = this.client.getEntries()
    return from(promise);
  }

  getEntryById(id:string){
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
