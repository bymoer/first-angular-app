import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { SearchProductResponse } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class JsonLoaderService {

  private fileUrl = 'assets/products.json';
  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<SearchProductResponse> {

    return this.http.get<SearchProductResponse>(this.fileUrl);
  }

  searchProducts(query: string, jsonData: Product[]): any[] {
    
    query = query.toLowerCase();

    const queryWords: string[] = query.split(' ');

    return jsonData.filter(item => {

      const titleToSearch = item.title.toLowerCase();

      return queryWords.every(word => titleToSearch.includes(word.toLowerCase()));

    });

  }

}