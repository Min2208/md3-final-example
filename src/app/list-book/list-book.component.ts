import {Component, OnInit} from '@angular/core';
import {BookInterface} from '../book.interface';
import {BookService} from '../book.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  lists: BookInterface[];

  constructor(private bookServie: BookService, private fb: FormBuilder) {
    this.bookServie.getBooks().subscribe(next => {
      this.lists = next;
    }, error => {
      alert('Thao tac khong thanh cong');
    });
  }

  ngOnInit() {
  }

}
