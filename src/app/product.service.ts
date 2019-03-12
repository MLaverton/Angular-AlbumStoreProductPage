import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
  getAlbum(number id){
    return this.http.get(this._albumUrl).map((response) => response.json());
  }
}
private class _albumUrl = '../assets/album.json';
