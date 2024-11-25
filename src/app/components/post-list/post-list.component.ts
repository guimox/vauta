import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts$: Observable<any[]> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.posts$ = this.dataService.getPosts();
  }

}
