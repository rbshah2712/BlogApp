import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private contentfulservice: ContentfulService){

  }

  blogPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
      this.blogPosts$ = this.contentfulservice.getAllEntries();
  }

}
