import {Component, OnInit} from '@angular/core';
import {BookInterface} from '../book.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book: BookInterface;
  data: FormGroup;
  message: string;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      id: '',
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getById(id).subscribe(
      next => {
        this.book = next;
        this.data.patchValue(this.book);
      },
      error => {
        this.book = null;
      }
    );

  }

  editBook() {
    this.bookService.updateBook(this.data.value).subscribe(next => {
      this.message = 'Sua thanh cong';
    }, error => {
      this.message = 'Sua that bai';
    });
  }

}
