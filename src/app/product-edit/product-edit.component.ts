import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../product';
import { Router } from '@angular/router';
import { ProductsService } from './../products.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
products;
product;
id;
  constructor( private _route: ActivatedRoute, private router:Router, private service:ProductsService) {

    this._route.paramMap.subscribe( params => {
              console.log(params.get('id'));
              this.products = this.service.retriveProducts();
              this.product = this.products[params.get('id')];
              this.id = params.get('id')
         })

  }
  onSubmit(formdata){
    this.router.navigate(['/products']) //reroute
    // formdata.pristine = true;
    // formdata.valid = true;

  }

  remove(idx){
     // const idx = this.service.retriveProducts();
     // console.log("idx",idx);
     this.products.splice(this.id, 1);
    //  this.service.deleteProduct(this.products);
      //  this.service.retriveProducts();
    //  this.router.navigate(['/products']);
     // this.products = this.service.retriveProducts();
  }

  ngOnInit() {
    this.products = this.service.retriveProducts();
  }


}
