import {Component, OnInit} from '@angular/core';
import {BookInterface} from '../book.interface';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
  book: BookInterface;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getById(id).subscribe(next => {
      this.book = next;
    }, error => {
      alert('Thao tac khong thanh cong');
    });
  }

}
