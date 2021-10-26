import { EventEmitter, Injectable, Input } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();

  listOfPosts: Post[] = [

    new Post(
      'Nature',
      'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
      'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg',
      'Kim Eckart',
      new Date(),
      5
    ),
    new Post(
      'Hampi',
      'Hampi is an ancient village in the south Indian state of Karnataka. It`s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear',
      'https://www.karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg',
      'Adrián Miranda',
      new Date(),
      3
    ),
    new Post(
      'Araku Valley',
      'Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It`s surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area`s numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.',
      'https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg',
      'Holidays DNA',
      new Date(),
      2
    ),
  ];

  //Facility 1 -Load posts-
  getPosts() {
      return this.listOfPosts;
  }

  //Facility 2 -Delete a post-
  deletePost( index: number ) {
      this.listOfPosts.splice(index, 1);
  }

  //Facility 3 -Add a new post-
  addPost(post: Post) {
      this.listOfPosts.push(post);
  }

  //Facility 4 -Edit a post-
  updatePost(index: number, post: Post){
      this.listOfPosts[index] = post;
  }

  //Facility 5 -Get a post (to edit)-
  getPost(index: number){
    return this.listOfPosts[index];
  }

  //Facility 6 -Likes-
  likePost (index: number) {
    this.listOfPosts[index].numberOfLikes += 1;
  }

  //Facility 7 -Set posts (from DB)-
  setPosts(listOfPosts: Post[]) {
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }
}
