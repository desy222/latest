import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Book }           from './book';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class BookService {
  private booksUrl = 'http://milenabooks.azurewebsites.net/api/books';
  constructor (private http: Http) {}

  getBooks (): Observable<Book[]> {
    return this.http.get(this.booksUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
 
  create(bookToAdd:Book): Observable<Book> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); 
      return this.http.post(this.booksUrl, bookToAdd, options) 
          .map((res:Response) => res.json()) 
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  deleteBook(id: number): Promise<void> {
      const url = `${this.booksUrl}/${id}`;
      let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); 
      return this.http.delete(url, options)
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    public saveChanges(id: number) {
      let book: Book;
      let headers = new Headers({ 'Content-Type': 'application/json' });
      const url = `${this.booksUrl}/${id}`;
          return this.http
                    .put(url, JSON.stringify(book), {headers: headers})
                    .map(res => res.json());
          }


}
