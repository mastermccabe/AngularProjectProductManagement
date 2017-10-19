import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  products = [];
  constructor() { }


  retriveProducts(){
    return this.products;
  }

  createProduct(product){

    this.products.push(product);

  }

  // deleteProduct(arr){
  //
  //   this.products = arr;
  //
  // }

}
