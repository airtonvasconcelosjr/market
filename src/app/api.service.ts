import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api.instabuy.com.br/apiv3/';
  private subdomain = 'supermercado';

  constructor(private http: HttpClient) { }

  getLayout(): Observable<any> {
    const url = `${this.baseUrl}layout?subdomain=${this.subdomain}`;
    return this.http.get(url);
  }
  
  getProductDetails(slug: string): Observable<any> {
    const url = `${this.baseUrl}item?subdomain=${this.subdomain}&slug=${slug}`;
    return this.http.get(url);
  }

}
