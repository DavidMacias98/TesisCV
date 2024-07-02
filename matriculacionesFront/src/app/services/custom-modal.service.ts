import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomModalService {

  constructor() { }

  $modal = new EventEmitter<any>();

}
