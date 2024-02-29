import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Produto} from '../models/produto.model';

const baseURL = 'http://localhost:8080/api/produto'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {

  }
  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(baseURL);
  }
  get(id:any):Observable<Produto>{
    return this.http.get<Produto>(`${baseURL}/${id}`)
  }
  create(data:any):Observable<any>{
    return this.http.post(baseURL , data)
  }

  update(id:any, data: any):Observable<any>{
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${baseURL}/${id}`, id)
  }
  deleteAll(): Observable<Produto[]> {
    return this.http.delete<Produto[]>(baseURL);
  }

  findByName(name:any): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${baseURL}?name=${name}`)
  }

}
