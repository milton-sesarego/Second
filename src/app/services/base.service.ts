import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuarios } from "../models/Usuarios";

@Injectable()
export class BaseService {
  public url = "https://localhost:44322/api/";

  constructor(public _http: HttpClient) {}

  public get(shorturl: string): Observable<any> {
    return this._http.get<any>(this.url + shorturl);
  }

  public post(shorturl: string, data: any) {
    return this._http.post(this.url + shorturl, data);
  }

  public delete(shorturl: string){
    return this._http.delete(this.url + shorturl);
  }
}
