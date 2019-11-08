import {Component, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

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

    })
    ;
  }

  addMember() {
    this.bookService.createBook(this.data.value).subscribe(next => {
      this.message = 'Add Member Success';
    });
    console.log(this.data.value);
  }
}
