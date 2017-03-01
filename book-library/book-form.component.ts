import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service'
@Component({
  selector: 'book-form',
  templateUrl: './book-form.html',
  moduleId: module.id,
  styles: ["max-height: 200px; float: left;"]
})


export class BookFormComponent {
  book: Book 
  @Output() bookToAdd = new EventEmitter();
  constructor(private bookService: BookService) {
    this.book = new Book();
  }
  
  addBook() {
    this.bookToAdd.emit(this.book)
  }
}