import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts: any;
  postTitle: any;
  searchText: any;

  constructor(private seachService:SearchService) { }

  ngOnInit() {
    this.searchEverything()
  }
  
  searchEverything(){
    this.seachService.search().subscribe((res:any) => {
      console.log(res);
      this.posts = res 
    })
  }

  titleValue(title:any){
    this.postTitle = title 
  }

}
