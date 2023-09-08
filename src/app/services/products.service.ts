import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl: string = "https://localhost:7235/api/Products";
  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(newProduct : Product): Observable<Product> {
    newProduct.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Product>(this.apiUrl, newProduct);
  }
  getProduct(id : string) : Observable<Product>{
    return this.http.get<Product>(this.apiUrl + "/" + id);
  }
  updateProduct(id : string, updateProductRequest:Product) : Observable<Product>{
    return this.http.put<Product>(this.apiUrl + "/" + id,updateProductRequest);
  }
  deleteProduct(id : string) : Observable<Product>{
    return this.http.delete<Product>(this.apiUrl + "/" + id);
  }

}
