import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../book.service';

class MemberService {
}

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  data: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  addBook() {
    this.bookService.createBook(this.data.value).subscribe(next => {
      this.message = 'Tao moi thanh cong';
    }, error => {
      this.message = 'Tao moi that bat';
    });
  }

}
