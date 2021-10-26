import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';

/**
 * Data Base Path:
 * https://live-posts-24504-default-rtdb.firebaseio.com/
 */

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  //First Functionality - Save
  saveData() {
    //Step 1 - Get list of posts from post.service
    const listOfPosts: Post[] = this.postService.getPosts();

    //Step 2 - Send list of posts to back-end
    //posts.json must be added at the end to indicate a table
    this.http
      .put(
        'https://live-posts-24504-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  //Second Functionality - Fletch
  fetchData() {
    //Step 1 - Get data from back-end(DB)
    this.http
      .get<Post[]>(
        'https://live-posts-24504-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

          //Step 2 - Give data to postService
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();

  }
}
