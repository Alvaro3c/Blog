import { Injectable } from '@angular/core';
import { Post } from '../interfaces/interface.post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  fecha: Date = new Date()

  constructor() { }


  private arrPosts: Post[] = [
    {
      titulo: 'Fotografía Nocturna',
      texto: 'La fotografía nocturna te permite añadirle a la escena altas dosis de creatividad. No solo por su capacidad de retratar aspectos que a simple vista no puedes apreciar, también por lo que puedes hacer con accesorios. Un ejemplo, las linternas para jugar con la iluminación de determinadas partes o para pintar con luz. ',
      autor: 'señor x',
      fecha: new Date('2002-03-03'),
      imagen: 'https://www.dzoom.org.es/wp-content/uploads/2014/03/8120144357_d15ee9ee8f_b-810x540.jpg',
      categoria: 'fotografia-nocturna',
    },
    {
      titulo: 'Fotografía producto',
      texto: 'La fotografía nocturna te permite añadirle a la escena altas dosis de creatividad. No solo por su capacidad de retratar aspectos que a simple vista no puedes apreciar, también por lo que puedes hacer con accesorios. Un ejemplo, las linternas para jugar con la iluminación de determinadas partes o para pintar con luz. ',
      autor: 'señor x',
      fecha: new Date('2002-06-03'),
      imagen: 'https://www.blogdelfotografo.com/wp-content/uploads/2020/12/producto_fondo_negro.jpg',
      categoria: 'fotografia-producto',
    }
  ]

  getAll(): Post[] {
    return this.arrPosts
  }

  /*   
  create(post){
      
    }  
    */

  getByCategory(category: String) {
    if (category === '') return this.arrPosts
    return this.arrPosts.filter(post => post.categoria === category);
  }

  getAllCategories(): String[] {
    return this.arrPosts.map(post => post.categoria);
  }

  createPost(post: Post) {
    this.arrPosts.push(post)

  }
}
