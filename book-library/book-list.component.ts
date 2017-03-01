import { Component, Input, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book'
import 'rxjs/add/operator/toPromise';


 
@Component({
  selector: 'book-list',
  templateUrl: './book-list.html',
  moduleId: module.id,
  styles: [".resp { width: 500px ; height: auto;}"]
})

export class BookListComponent implements OnInit {
   @Input() books:Book[]
   @Input() set book(newBook: Book){
     console.log(newBook);
      if(newBook){
        this.books.push(newBook);
      }
   }//the new book


    constructor(private bookService: BookService) {}

    ngOnInit() {
      this.bookService.getBooks().subscribe((books) => {
        this.books=books;
      })
    }
    delete(book: Book): void {
      this.bookService
          .deleteBook(book.Id)
          .then(() => {
            this.books = this.books.filter(h => h !== book);
          });
    }
    save(book: Book): void {
      this.bookService.saveChanges(book.Id).subscribe((book) => {
        this.book=book;
      })
    }
}
