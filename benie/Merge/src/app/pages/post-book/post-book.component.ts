import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookServiceService } from 'src/app/services/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-book',
  templateUrl: './post-book.component.html',
  styleUrls: ['./post-book.component.css']
})
export class PostBookComponent implements OnInit {

  books:any;
  
  constructor(private bookService:BookServiceService,private route:ActivatedRoute,private router:Router,private http:HttpClient) { }

  goToUrl(id){
    this.router.navigate(['/books',id])
  }

  postBook(book_data:any)
  {
    console.warn(book_data) 
    this.bookService.addBook(book_data).subscribe((result) => {
      console.warn(result)
    });
  }

  ngOnInit(): void {
  }

}
