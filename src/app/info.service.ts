import { Injectable } from '@angular/core';
import { POSTS } from './database/posts.db';


export interface Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  arrPost: Post[];
  categorias: Post[];

  constructor() {
    this.arrPost = [];
    this.categorias = [];
  }

  addReceta(pPost): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPost.push(pPost);
      console.log(this.arrPost);

      resolve(this.arrPost)
    });
  }



  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost = POSTS);
      console.log(POSTS);

    })
  }

  getPostByCategory(pCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const listaFiltrada = this.arrPost.filter(post => {
        return post.categoria === pCategoria;
      });
      resolve(listaFiltrada);
    });
  }

}
