import { Component, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  @Input() posts: Post[] = [];

  constructor() {
    const post1 = new Post(
      'Premier',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi. Quo eligendi fuga sit iusto accusantium, porro animi aut excepturi enim est dicta ad laborum officia id iste quidem quod.'
    );
    const post2 = new Post(
      'Deuxième',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi. Quo eligendi fuga sit iusto accusantium, porro animi aut excepturi enim est dicta ad laborum officia id iste quidem quod.'
    );
    const post3 = new Post(
      'Encore un poste',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi. Quo eligendi fuga sit iusto accusantium, porro animi aut excepturi enim est dicta ad laborum officia id iste quidem quod.'
    );

    this.posts.push(post1);
    this.posts.push(post2);
    this.posts.push(post3);
  }
}
