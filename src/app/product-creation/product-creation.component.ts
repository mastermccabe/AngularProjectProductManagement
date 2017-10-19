import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { Router } from '@angular/router';

import { ProductsService } from './../products.service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
  product = new Product();
  products = [];
  submitted = false;


  constructor(private router:Router, private service:ProductsService) { //these got injected

  // this.products = this.Router.retriveProducts();
 }
  onSubmit(formdata){


    if(formdata.valid){
      this.products.push(this.product);
      // this.user = new User();

      this.submitted = true;

      this.service.createProduct(this.product); //push
      console.log(this.product)

      this.router.navigate(['/products']) //reroute

    }
    else{
      console.log("error");
    }
    this.product = new Product();

    // formdata.pristine = true;
    // formdata.valid = true;

  }


  ngOnInit() {
  }

}
