import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
import { BookFormComponent} from './book-form.component';
import { BookService } from './book.service';
import { NavbarComponent } from './navbar.component'
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list.component';
import { ReactiveFormsModule }          from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,

  ],

  declarations: [  
    AppComponent ,
    NavbarComponent,
    BookListComponent,
    BookFormComponent,
    ],
  providers: [BookService],
  bootstrap:  [ AppComponent ]
})

export class AppModule {
  constructor() {

  }
}
