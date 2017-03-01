import { Component, OnInit, Input } from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import './rxjs-operators';
import { BookService } from './book.service';
import { Book } from './book';
import { BookListComponent } from './book-list.component';


@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <div class="container">
          <div class="row">
                    <div class="col-md-5">
                        <book-form (bookToAdd)="bookAdded($event)"></book-form>
                    </div>
          </div>
          <div class="row">
            <div>
                <h1>All Books {{mode}}</h1>
                <h3>Books:</h3>
                <book-list [book]="newBook"></book-list>
            </div>
          </div>
    </div>

    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">Library</a></li>
      <li class="active">Data</li>
    </ol>`,

  moduleId: module.id,

})

export class AppComponent  {
    public newBook: Book;
    
    selectedBook: Book;
    onSelect(book: Book): void {
      this.selectedBook = book;
    }

    constructor(private bookService: BookService) {}
      bookAdded(addedBook:Book) {
          this.bookService.create(addedBook).subscribe()
      }

}
