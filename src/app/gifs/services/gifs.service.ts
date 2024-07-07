import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, provideHttpClient } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

 public gifList: Gif[]=[];

  private _tagHistory: string[] = [];
  private apiKey:string = 'unV5FW5e8XHPC9EdVXrAuD8tzNdGugHr'

  get tagHistory() {
    return [...this._tagHistory];
  }

  constructor(private http: HttpClient ) { }

  private organzizeHistory(tag:string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag))
    {this._tagHistory = this._tagHistory.filter(t => t !== tag);}

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
  }

  searchTag(tag: string):void {
    if (tag.length === 0) return;
    this.organzizeHistory(tag);
    let apiKey:string = "unV5FW5e8XHPC9EdVXrAuD8tzNdGugHr"
    let url = "https://api.giphy.com/v1/gifs/search?"

    const params = new HttpParams()
    .set('api_key', apiKey)
    .set('q', tag)
    .set('limit', '10')

    this.http.get<SearchResponse>(url, {params}).subscribe( resp => {
      this.gifList = resp.data;
      console.log(this.gifList);
    }
    )






    console.log(this._tagHistory);
  }

}
