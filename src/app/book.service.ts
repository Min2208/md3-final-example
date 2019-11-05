import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookInterface} from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {
  }

  getById(id: number): Observable<BookInterface> {
    return this.http.get<BookInterface>(`${this.API_URL}/${id}`);
  }

  getBooks(): Observable<BookInterface[]> {
    return this.http.get<BookInterface[]>(`${this.API_URL}`);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);

  }


  createBook(post: Partial<BookInterface>): Observable<BookInterface> {
    return this.http.post<BookInterface>(`${this.API_URL}`, post);
  }

  updateBook(post: BookInterface): Observable<BookInterface> {
    console.log('ok');
    return this.http.put<BookInterface>(`${this.API_URL}/${post.id}`, post);

  }

}
