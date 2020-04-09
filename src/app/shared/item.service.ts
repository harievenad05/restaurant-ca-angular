import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ItemData } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItemsList(): Observable<ItemData>{
    return this.http.get<ItemData>(`${environment.apiURL}item`, {responseType: 'json'})
  }
}
