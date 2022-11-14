import { Component } from '@angular/core';
import { Post } from '../../interfaces/interface.post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent {



  posts: Post[]
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute,) {
    this.posts = this.postService.getAll()
  }
  onCategoryChange(event: Event): void {
    const target = event.target;
    const category = (target as HTMLSelectElement).value;
    this.posts = this.postService.getByCategory(category);
  }

  get allCategories(): String[] {
    return this.postService.getAllCategories();
  }

  create(post: Post) {
    this.posts.push(post)
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params)

    })
  }

}
