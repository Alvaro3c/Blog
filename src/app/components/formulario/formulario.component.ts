import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup

  constructor(private postService: PostService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      categoria: new FormControl(),
      fecha: new FormControl()

    })


  }

  onSubmit() {
    //console.log(this.formulario.value)
    this.postService.createPost(this.formulario.value)
  }
}

/*para el formulario en HTML
titulo: string; <input />
texto: string; <teatarea>dshdsjdhsdjshd</textarea>
autor: string; <input />
imagen: string; <input />
categoria: string; <input /> */