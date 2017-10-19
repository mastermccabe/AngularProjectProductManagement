import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product';
import { ProductsService } from './../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  constructor(private router:Router, private service:ProductsService) { //these got injected

  // this.products = this.Router.retriveProducts();
 }
 remove(idx){
    // const idx = this.service.retriveProducts();
    // console.log("idx",idx);
    this.products.splice(idx, 1);
    // this.service.deleteProduct(this.products);

    // this.service.retriveProducts();
    // this.router.navigate(['/products']);
    // this.products = this.service.retriveProducts();
 }

 onSubmit(formdata){
   this.router.navigate(['/products']) //reroute
   // formdata.pristine = true;
   // formdata.valid = true;

 }
  ngOnInit() {
    this.products = this.service.retriveProducts();
  }

}
