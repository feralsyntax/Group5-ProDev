import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

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
