import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService:ProductsService, private router: Router) {
  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next : (products) => {
        this.products = products;
      },
      error : (response) =>{
        console.log(response);
      }
    })
  }

  deleteProduct(id : string){
    this.productService.deleteProduct(id).subscribe({
      next:(response) => {
        this.router.navigate(['products']);
      },
      error:(error) => {
        console.log(error)
      }
    })
  }
}
