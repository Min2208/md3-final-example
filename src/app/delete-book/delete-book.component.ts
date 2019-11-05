import {Component, OnInit} from '@angular/core';
import {BookInterface} from '../book.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  book: BookInterface;
  message: string;

  constructor(
    private bookService: BookService, private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getById(id).subscribe(next => {
      this.book = next;
    }, error => {
      alert('Thao tac khong thanh cong');
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(next => {
      this.message = 'Xoa thanh cong';
    }, error => {
      this.message = 'Xoa khong thanh cong';
    });
  }

}
